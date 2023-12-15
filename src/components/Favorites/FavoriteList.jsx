import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Item from "../ItemList/Item";

function FavoriteList({ favs, addFavorite, removeFavorite, isInList }) {
	function sortByPriority(arr) {
		return arr.sort((a, b) => {
			if (a.stock === 1 && b.stock !== 1) {
				return -1;
			} else if (a.stock !== 1 && b.stock === 1) {
				return 1;
			}

			if (a.status === false && b.status === true) {
				return 1;
			} else if (a.status === true && b.status === false) {
				return -1;
			}

			return 0;
		});
	}

	const favsSort = sortByPriority(favs);
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				width: "90%",
				justifyContent: "center",
				pt: 5,
				gap: 2,
			}}
		>
			{favsSort.map((product) => (
				<Item
					key={product.id}
					item={product}
					isFavorite={isInList(product.id)}
					{...{ addFavorite, removeFavorite }}
				/>
			))}
		</Box>
	);
}

FavoriteList.propTypes = {
	favs: PropTypes.array.isRequired,
	addFavorite: PropTypes.func,
	removeFavorite: PropTypes.func,
	isInList: PropTypes.func,
};

export default FavoriteList;
