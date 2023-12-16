import { Typography, Box, Pagination } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Category, Product } from "../services";
import ItemList from "./components/ItemList/ItemList";
import Spinner from "./components/common/Spinner";
import useStore from "../hooks/useStore";
import useFav from "../hooks/useFav";

function ItemListContainer() {
	const [productsByCategory, setProductsByCategory] = useState([]);
	const [loadingCategory, setLoadingCategory] = useState(false);
	const [currentPage, setCurrentPage] = useState(1)
	const { isInList, addFavorite, removeFavorite } = useFav();
	const { productList, loading } = useStore();
	const { categoryKey } = useParams();
	const { state } = useLocation();

	const itemsPerPage = 9
	const products = categoryKey ? productsByCategory : productList;
	const maxPages = Math.ceil(products.length / itemsPerPage);
	let productsToShow = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

	const changePag = (_, page) =>{
		setCurrentPage(page)
		window.scrollTo({
			top: 0, 
			behavior: page === maxPages ? "instant" : "smooth"
		});
	};


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
		<Box sx={{ display: "flex", flexDirection: "column" }} >
			<Box sx={{ bgcolor: "#ccc", mb: 2.5, mt: 0.5 }} >
				<Typography
					variant="h5"
					sx={{
						alignSelf: "stretch",
						justifyContent: "center",
						textAlign: "center",
						fontFamily: "Playfair Display",
						padding: 2,
						textTransform: "capitalize",
					}}
				>
					{categoryKey ? ` ${categoryKey}` : "todas las categorías"}
				</Typography>
			</Box>
			<Box>
				{loading || (categoryKey && loadingCategory) ? (
					<Spinner />
				) : (
					<ItemList items={productsToShow} {...{ isInList, addFavorite, removeFavorite }} />
				)}
			</Box>
			<Pagination
				count={maxPages}
				size="large"
				sx={{ alignSelf: "center", marginTop: 5 }}
				onChange={changePag}/>
		</Box>
	);
}

export default ItemListContainer;
