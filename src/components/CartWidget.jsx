import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PropTypes } from "prop-types";
import { Badge, IconButton } from "@mui/material";
import useCart from "../hooks/useCart";
import { ShoppingCartOutlined } from "@mui/icons-material";

function CartWidget() {
	const { getCart } = useCart()
	const { total_items } = getCart()

	return (
		<IconButton sx={{margin: `0 35px`, visibility: total_items ? "" : "hidden"}}>
			<Badge
				badgeContent={total_items}
				color="error"
			>
				<ShoppingCartIcon color="action" sx={{ ":hover": { color: "chocolate" } }} />
			</Badge>
		</IconButton>
	);
}

export default CartWidget;
