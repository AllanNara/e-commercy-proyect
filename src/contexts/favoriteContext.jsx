import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const FavoriteContext = createContext([]);

function getInitialState() {
	const favorites = localStorage.getItem("favorites");
	return favorites ? JSON.parse(favorites) : [];
}

export const FavoriteProvider = ({ children }) => {
	const [favorites, setFavorites] = useState(getInitialState);

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const isInList = (idProduct) => favorites.some((product) => product === idProduct);

	const addFavorite = (idProduct) =>
		!isInList(idProduct) && setFavorites((list) => [...list, idProduct]);

	const removeFavorite = (idProduct) =>
		isInList(idProduct) &&
		setFavorites((list) => list.filter((product) => product !== idProduct));

	return (
		<FavoriteContext.Provider
			value={{ isInList, favorites, addFavorite, removeFavorite }}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

FavoriteProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
