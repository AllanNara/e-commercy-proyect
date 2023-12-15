import { useContext } from "react";
import { FavoriteContext } from "../contexts/favoriteContext";

const useFav = () => {
	const favorites = useContext(FavoriteContext);
	if (!favorites) throw new Error("useFav debe ser utilizado dentro de un FavoriteProvider");

	return favorites;
};

export default useFav;
