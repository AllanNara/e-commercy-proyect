import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { useState } from "react";
import { Order as OrderService } from "../services";
import CustomBreadcrums from "./components/common/CustomBreadcrums";
import CustomContainer from "./components/common/CustomContainer";
import OrderDetail from "./components/Order/OrderDetail";
import SearchBar from "./components/Order/SearchBar";

export default function Order() {
	const [orderData, setOrderData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = (id) => {
		setError(false)
		setLoading(true);
		OrderService.read(id)
			.then((order) => setOrderData(order))
			.catch((err) => err.message === "not-exist" ? setError(true) : console.error(err))
			.finally(() => setLoading(false));
	};

	const Bread = () => <CustomBreadcrums label="Search Orders" />;
	return (
		<CustomContainer BreadComponent={Bread}>
			<BoxContainer variant="outlined">
				<SearchBar onSubmit={handleSubmit} />
				<OrderDetail loading={loading} order={orderData} error={error}/>
			</BoxContainer>
		</CustomContainer>
	);
}

const BoxContainer = styled(Paper)(() => ({
	margin: 55,
	marginTop: 20,
	minHeight: "85vh",
	backgroundColor: "#eee",
}));
