import { PropTypes } from "prop-types";
import { Typography, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Category, Product } from "../../services";
import ItemList from "./ItemList";
import Spinner from "../common/Spinner";
import useStore from "../../hooks/useStore";

ItemListContainer.propTypes = {
	greeting: PropTypes.string,
};

function ItemListContainer({ greeting = "" }) {
	const { productList, loading } = useStore();
	const [productsByCategory, setProductsByCategory] = useState([]);
	const [loadingCategory, setLoadingCategory] = useState(false);

	const { categoryKey } = useParams();
	const { state } = useLocation();

	useEffect(() => {
		async function fetchListProductsByCategory() {
			try {
				setLoadingCategory(true);
				let options;
				if (state && state.categoryId) {
					options = [["category", "==", `${state.categoryId}:ref:/categories/`]];
				} else if (!state) {
					const category = await Category.readAll([["key", "==", categoryKey]]);
					options = [["category", "==", `${category[0].id}:ref:/categories/`]];
				}

				const result = await Product.readAll(options);
				setProductsByCategory(result);
			} catch (error) {
				console.error("Fatal error: ", error);
			} finally {
				setLoadingCategory(false);
			}
		}

		categoryKey && fetchListProductsByCategory();

		return () => setProductsByCategory([]);
	}, [categoryKey, state]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				bgcolor: "#f9f9f9",
			}}
		>
			<Container>
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
				{loading || (categoryKey && loadingCategory) ? (
					<Spinner />
				) : (
					<ItemList items={categoryKey ? productsByCategory : productList} />
				)}
			</Container>
		</Box>
	);
}

export default ItemListContainer;
