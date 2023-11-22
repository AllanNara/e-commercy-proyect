import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PropTypes } from "prop-types";
import { Badge, IconButton } from "@mui/material";

function CartWidget({ items }) {
	return (
		<IconButton sx={{margin: `0 35px`}}>
			<Badge
				badgeContent={items}
				color="error"
			>
				<ShoppingCartIcon color="action" sx={{ ":hover": { color: "chocolate" } }} />
			</Badge>
		</IconButton>
	);
}

CartWidget.propTypes = {
	items: PropTypes.number.isRequired,
};

export default CartWidget;
