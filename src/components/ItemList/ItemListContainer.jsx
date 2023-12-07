import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";
import { useLocation, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Spinner from "../common/Spinner";
import { Category, Product } from "../../services";
import useStore from "../../hooks/useStore";
import { doc } from "firebase/firestore";
import firestoreInstance from "../../services/firebase.config";

function ItemListContainer({ greeting = "" }) {
	const { productList, updateProductList } = useStore();
	const [loading, setLoading] = useState(false);
	const { categoryKey } = useParams();
	const { state } = useLocation();
	const [effectExecuted, setEffectExecuted] = useState(false);

	useEffect(() => {
		async function fetchListProducts() {
			if (!effectExecuted && (!productList.length || categoryKey)) {
				try {
					setLoading(true);
					let options;
					if (state && state.categoryId) {
						options = [["category", "==", doc(firestoreInstance, "/categories/", state.categoryId)]];
					} else if (!state && categoryKey) {
						const category = await Category.readAll([["key", "==", categoryKey]]);
						options = [["category", "==", doc(firestoreInstance, "/categories/", category[0].id)]];
					}
					const result = await Product.readAll(options);
					updateProductList(result);
				} catch (error) {
					console.error("Fatal error: ", error);
				} finally {
					setLoading(false);
					setEffectExecuted(true);
				}
			}
		}
		fetchListProducts();

		return () => {
			if (productList.length && categoryKey) {
				updateProductList([]);
			}
		};
	}, [categoryKey, updateProductList, productList, effectExecuted, state]);

	useEffect(() => {
		setEffectExecuted(false);
	}, [categoryKey]);

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
