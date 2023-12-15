import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Box, Container, Typography } from "@mui/material";
import CustomButtom from "../common/CustomButtom";
import { Link } from "react-router-dom";

function CartList({ list, toPay, totalQuantity }) {
	return (
		<Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
			<Box sx={{ display: "flex", justifyContent: "flex-end", width: "80vw", gap: 5, mt: 1 }}>
				<Typography variant="h6" fontFamily={"Poppins"} fontWeight={600}>Productos: {totalQuantity}</Typography>
				<Typography variant="h6" fontFamily={"Poppins"} fontWeight={600}>Total: ${toPay}</Typography>
			</Box>
			<Box sx={{ width: "85vw", mt: -3 }}>
				{list.map((item) => (
					<CartItem key={item.id} {...{ item }} />
				))}
			</Box>
			<Link to="/cart/checkout">
				<CustomButtom
					content={"Continuar con la compra"}
					cs={{ mt: -2, width: 400, bgcolor: "#fff" }}
				/>
			</Link>
		</Container>
	);
}

CartList.propTypes = {
	list: PropTypes.array.isRequired,
	toPay: PropTypes.number,
	totalQuantity: PropTypes.number,
};

export default CartList;
