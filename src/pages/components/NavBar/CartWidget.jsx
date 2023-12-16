import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Tooltip } from "@mui/material";
import useCart from "../../../hooks/useCart";

import PropTypes from "prop-types";

function CartWidget({ load = false }) {
	const { total_items } = useCart();

	return (
		<Tooltip title="Mi carrito">
			<IconButton sx={{ visibility: total_items ? "" : "hidden" }}>
				<Badge badgeContent={load ? 0 : total_items} color="error">
					<ShoppingCartIcon
						sx={{
							":hover": { color: "chocolate" },
							width: 30,
							height: 30,
							color: "#434343",
						}}
					/>
				</Badge>
			</IconButton>
		</Tooltip>
	);
}

CartWidget.propTypes = {
	load: PropTypes.bool,
};

export default CartWidget;
