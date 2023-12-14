import CartList from "./CartList";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CustomContainer from "../common/CustomContainer";
import CustomBreadcrums from "../common/CustomBreadcrums";


export default function CartListContainer() {
	const { cart, total_items, total_to_pay } = useCart();
	const Bread = () => <CustomBreadcrums label={"Shopping Cart"}/>

	return (
		<CustomContainer BreadComponent={Bread}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: 3,
				}}
			>
				{total_items ? (
					<>
						<CartList list={cart} toPay={total_to_pay} totalQuantity={total_items} />
						<Link to="/cart/checkout">
							<span style={{ padding: 15, border: "1px solid black" }}>
								Continuar con la compra
							</span>
						</Link>
					</>
				) : (
					<Typography variant="h5">Aun no tienes productos en tu carrito...</Typography>
				)}
			</Box>
		</CustomContainer>
	);
}
