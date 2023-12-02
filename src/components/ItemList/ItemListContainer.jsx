import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Spinner from "../helpers/Spinner";
import useFirestore from "../../hooks/useFirestore";


function ItemListContainer({ greeting = "" }) {
	const [data, setData] = useState(null);
	const { Product } = useFirestore()
	const { categoryId } = useParams();

	useEffect(() => {
		const options = [categoryId ? [["category", "==", categoryId]] : null, undefined]
		Product.readAll(...options)
			.then(data => setData(data))
			.catch(err => console.log("Fatal error: ", err))
		return () => {
			setData(null);
		};
	}, [categoryId, Product]);

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					alignSelf: "stretch",
					justifyContent: "center",
					textAlign: "center",
					padding: 3,
				}}
			>
				{greeting}
			</Typography>
			{data ? <ItemList items={data} /> : <Spinner />}
		</Container>
	);
}

ItemListContainer.propTypes = {
	greeting: PropTypes.string,
};

export default ItemListContainer;
