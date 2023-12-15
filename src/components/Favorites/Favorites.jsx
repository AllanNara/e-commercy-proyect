import { Box, Divider, Typography } from "@mui/material";
import useFav from "../../hooks/useFav";
import useStore from "../../hooks/useStore";
import CustomBreadcrums from "../common/CustomBreadcrums";
import CustomContainer from "../common/CustomContainer";
import Spinner from "../common/Spinner";
import HeartBrokenSharpIcon from "@mui/icons-material/HeartBrokenSharp";
import { useEffect, useState } from "react";
import FavoriteList from "./FavoriteList";
import FavoriteHeader from "./FavoriteHeader";
import FavoriteAside from "./FavoriteAside";

export default function Favorites() {
	const { favorites, isInList, addFavorite, removeFavorite } = useFav();
	const { productList, loading } = useStore();
	const [favoritesList, setfavoritesList] = useState([]);

	useEffect(() => {
		if (loading) return;
		const favoritesProducts = productList.filter((product) =>
			favorites.includes(product.id)
		);
		setfavoritesList(favoritesProducts);
	}, [loading, productList, favorites]);

	const Bread = () => <CustomBreadcrums label={"Favorites"} />;

	console.log({ favorite: favoritesList[0] });
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
