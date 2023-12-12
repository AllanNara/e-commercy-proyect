import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import useCart from "../../hooks/useCart";

import PropTypes from 'prop-types'

function CartWidget({ load = false }) {
	const { total_items } = useCart()

	return (
		<IconButton sx={{margin: `0 35px`, visibility: total_items ? "" : "hidden"}}>
			<Badge
				badgeContent={load ? 0 : total_items}
				color="error"
			>
				<ShoppingCartIcon color="action" sx={{ ":hover": { color: "chocolate" } }} />
			</Badge>
		</IconButton>
	);
}

CartWidget.propTypes = {
	load: PropTypes.bool
}

export default CartWidget;
