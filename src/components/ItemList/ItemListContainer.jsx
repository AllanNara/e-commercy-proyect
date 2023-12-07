import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Spinner from "../common/Spinner";
import { Product } from "../../services";
import useStore from "../../hooks/useStore";

function ItemListContainer({ greeting = "" }) {
	const { productList, updateProductList } = useStore();
	const [loading, setLoading] = useState(false);
	const { categoryId } = useParams();
	const [effectExecuted, setEffectExecuted] = useState(false);

	useEffect(() => {
		if (!effectExecuted && (!productList.length || categoryId)) {
			setLoading(true);
			const options = categoryId ? [["category", "==", categoryId]] : null;
			Product.readAll(options)
				.then((data) => updateProductList(data))
				.catch((err) => console.log("Fatal error: ", err))
				.finally(() => setLoading(false));
			setEffectExecuted(true);
		}
		return () => {
			if (productList.length && categoryId) {
				updateProductList([]);
			}
		};
	}, [categoryId, updateProductList, productList, effectExecuted]);

	useEffect(() => {
		setEffectExecuted(false);
	}, [categoryId]);

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
			{!loading ? <ItemList items={productList} /> : <Spinner />}
		</Container>
	);
}

ItemListContainer.propTypes = {
	greeting: PropTypes.string,
};

export default ItemListContainer;
