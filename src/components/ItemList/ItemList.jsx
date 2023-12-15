import PropTypes from "prop-types";
import Item from "./Item";
import { Box } from "@mui/material";

function ItemList({ items, isInList, addFavorite, removeFavorite }) {
	return (
		<Box
			sx={{
				marginTop: 4,
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				gap: 5,
			}}
		>
			{items.map((item) => (
				<Item
					key={item.id}
					item={item}
					isFavorite={isInList(item.id)}
					{...{ addFavorite, removeFavorite }}
				/>
			))}
		</Box>
	);
}

ItemList.propTypes = {
	items: PropTypes.array.isRequired,
	isInList: PropTypes.func,
	addFavorite: PropTypes.func,
	removeFavorite: PropTypes.func,
};

export default ItemList;
