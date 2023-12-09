import { doc } from "firebase/firestore";
import { PropTypes } from "prop-types";
import { Typography, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Category, Product } from "../../services";
import firestoreInstance from "../../services/firebase.config";
import ItemList from "./ItemList";
import Spinner from "../common/Spinner";
import useStore from "../../hooks/useStore";

ItemListContainer.propTypes = {
	greeting: PropTypes.string,
};

function ItemListContainer({ greeting = "" }) {
	const { updateProductList, productList } = useStore();
	const [loading, setLoading] = useState(false);
	const { categoryKey } = useParams();
	const { state } = useLocation();
	const [effectExecuted, setEffectExecuted] = useState(false);

	useEffect(() => {
		async function fetchListProducts() {
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
			}
		}
		
		if (!effectExecuted && (!productList.length || categoryKey)) {
			fetchListProducts();
			setEffectExecuted(true);
		}	

		return () => {
			if (productList.length && categoryKey) {
				updateProductList([]);
				setEffectExecuted(false);
			}
		};
	}, [categoryKey, effectExecuted, updateProductList, productList, state]);

	useEffect(() => {
		if(categoryKey) {
			updateProductList([]);
			setEffectExecuted(false);
		}
	}, [categoryKey, updateProductList]);

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

export default ItemListContainer;
