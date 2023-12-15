import { PropTypes } from "prop-types";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Category, Product } from "../../services";
import ItemList from "./ItemList";
import Spinner from "../common/Spinner";
import useStore from "../../hooks/useStore";
import useFav from "../../hooks/useFav";

ItemListContainer.propTypes = {
	greeting: PropTypes.string,
};

function ItemListContainer({ greeting = "Todas las categorías" }) {
	const { productList, loading } = useStore();
	const [productsByCategory, setProductsByCategory] = useState([]);
	const [loadingCategory, setLoadingCategory] = useState(false);
	const { isInList, addFavorite, removeFavorite } = useFav();
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
			}}
		>
			<Box
				sx={{
					bgcolor: "#ccc",
					mb: 2.5,
					mt: 0.5,
				}}
			>
				<Typography
					variant="h5"
					sx={{
						alignSelf: "stretch",
						justifyContent: "center",
						textAlign: "center",
						fontFamily: "Playfair Display",
						padding: 2,
						textTransform: categoryKey && "capitalize",
					}}
				>
					{categoryKey ? ` ${categoryKey}` : greeting}
				</Typography>
			</Box>
			<Box>
				{loading || (categoryKey && loadingCategory) ? (
					<Spinner />
				) : (
					<ItemList
						items={categoryKey ? productsByCategory : productList}
						{...{ isInList, addFavorite, removeFavorite }}
					/>
				)}
			</Box>
			{/* <Pagination count={10} size="large" sx={{alignSelf: "center", marginTop: 5}}/> */}
		</Box>
	);
}

export default ItemListContainer;
