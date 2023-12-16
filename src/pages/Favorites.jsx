import { Box, Divider, Typography } from "@mui/material";
import HeartBrokenSharpIcon from "@mui/icons-material/HeartBrokenSharp";
import { useEffect, useState } from "react";
import useFav from "../hooks/useFav";
import useStore from "../hooks/useStore";
import CustomBreadcrums from "./components/common/CustomBreadcrums";
import CustomContainer from "./components/common/CustomContainer";
import Spinner from "./components/common/Spinner";
import FavoriteList from "./components/Favorites/FavoriteList";
import FavoriteHeader from "./components/Favorites/FavoriteHeader";
import FavoriteAside from "./components/Favorites/FavoriteAside";
import { sortByPriority } from "./utils/favs";

export default function Favorites() {
	const { favorites, isInList, addFavorite, removeFavorite } = useFav();
	const { productList, loading } = useStore();
	const [favoritesList, setfavoritesList] = useState([]);

	useEffect(() => {
		if (loading) return;
		const listFavorites = productList.filter((product) =>
			favorites.includes(product.id)
		);

		const listFavSort = sortByPriority(listFavorites)
		setfavoritesList(listFavSort);
	}, [loading, productList, favorites]);

	const Bread = () => <CustomBreadcrums label={"Favorites"} />;

	if (loading) return <Spinner />;
	return (
		<CustomContainer BreadComponent={Bread}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: 3,
				}}
			>
				<FavoriteHeader />
				<Box sx={{ display: "flex", width: "100.3%" }}>
					<FavoriteAside />
					{!favoritesList.length ? (
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "60%",
								mb: 5,
								ml: 10
							}}
						>
							<HeartBrokenSharpIcon sx={{ fontSize: 100 }} />
							<Typography variant="h4" sx={{ mt: 3 }}>
								Aun no tienes productos favoritos...
							</Typography>
						</Box>
					) : (
						<FavoriteList
							favs={favoritesList}
							{...{ isInList, addFavorite, removeFavorite }}
						/>
					)}
				</Box>
			</Box>
			<Divider sx={{ width: "100%", mt: 5, mb: -3 }} />
		</CustomContainer>
	);
}
