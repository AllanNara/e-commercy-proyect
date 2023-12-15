import styled from "@emotion/styled";
import CustomBreadcrums from "../common/CustomBreadcrums";
import CustomContainer from "../common/CustomContainer";
import SearchBar from "./SearchBar";
import { Paper } from "@mui/material";
import OrderDetail from "./OrderDetail";
import { Order as OrderService } from "../../services";
import { useState } from "react";

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
