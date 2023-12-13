import PropTypes from "prop-types";
import Item from "./Item";
import { Box } from "@mui/material";

function ItemList({ items }) {
	return (
		<Box
			sx={{
				marginTop: 2,
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				gap: 5,
			}}
		>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</Box>
	);
}

ItemList.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ItemList;
