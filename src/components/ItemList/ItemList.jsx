import PropTypes from "prop-types";
import Item from "./Item";

function ItemList({ items }) {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				gap: 25,
				marginBottom: "50px"
			}}
		>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
}

ItemList.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ItemList;
