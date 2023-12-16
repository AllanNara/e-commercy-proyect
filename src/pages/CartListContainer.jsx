import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import { Box, Typography } from "@mui/material";
import CustomContainer from "./components/common/CustomContainer";
import CustomBreadcrums from "./components/common/CustomBreadcrums";
import CartList from "./components/Cart/CartList";
import useCart from "../hooks/useCart";

export default function CartListContainer() {
	const { cart, total_items, total_to_pay } = useCart();
	const Bread = () => <CustomBreadcrums label={"Shopping Cart"} />;

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
					<CartList list={cart} toPay={total_to_pay} totalQuantity={total_items} />
				) : (
					<>
						<LocalMallSharpIcon sx={{ fontSize: 100 }} />
						<Typography variant="h4" sx={{ mt: 3 }}>
							Aun no tienes productos en tu carrito...
						</Typography>
					</>
				)}
			</Box>
		</CustomContainer>
	);
}
