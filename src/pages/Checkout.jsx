import { Backdrop, CircularProgress, Container, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc } from "firebase/firestore";
import PropTypes from "prop-types";
import { Order } from "../services";
import useCart from "../hooks/useCart";
import useForm from "../hooks/useForm";
import useStore from "../hooks/useStore";
import firestoreInstance from "../services/firebase.config";
import CustomContainer from "./components/common/CustomContainer";
import CustomBreadcrums from "./components/common/CustomBreadcrums";
import CheckoutForm from "./components/Checkout/CheckoutForm";
import Brief from "./components/common/Brief";
import { checkErrors } from "./utils/checkout";

Checkout.propTypes = {
	user: PropTypes.any,
	logout: PropTypes.func,
};

export default function Checkout({ user, logout }) {
	const fieldsForm = ["first_name", "last_name", "phone", "address"];
	const { formData, inputChange, errors, validateForm } = useForm(
		fieldsForm,
		checkErrors
	);
	const [orderId, setOrderId] = useState(null);
	const [loadOrder, setLoadOrder] = useState(false);
	const { cart, total_to_pay, total_items, clearCart } = useCart();
	const { setRefresh: refreshProducts } = useStore();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (orderId)
			navigate("/cart/checkout/completed", { state: { order: orderId, from: pathname } });
		return () => setOrderId(null);
	}, [pathname, orderId, navigate]);

	const buildNewOrder = () => {
		const order = {
			buyer: { ...formData, user: user.email },
			items: cart.map(({ id, quantity, total, title }) => ({
				product: doc(firestoreInstance, "/products/" + id),
				subtotal: total,
				title,
				quantity,
			})),
			total_to_pay,
			total_items,
		};

		return order;
	};

	const createOrder = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;
		const newOrder = buildNewOrder();
		try {
			setLoadOrder(true);
			const order = await Order.create(newOrder);
			clearCart();
			refreshProducts(true);
			setOrderId(order);
		} catch (error) {
			console.log("Fatal error: ", error);
		} finally {
			setLoadOrder(false);
		}
	};

	return (
		<>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loadOrder}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<CustomContainer
				bgc={"#f8f8f8"}
				BreadComponent={() => (
					<CustomBreadcrums label="Shopping Cart" linkTo="/cart" label2={"Checkout"} />
				)}
			>
				<Container
					sx={{
						display: "flex",
						justifyContent: "center",
						gap: 5,
						mt: 3,
					}}
				>
					<Grid sx={{ width: "50%" }}>
						<Brief {...{ cart, total_to_pay, total_items }} />
					</Grid>
					<Grid sx={{ width: "40%" }}>
						<CheckoutForm
							{...{ formData, inputChange, errors, createOrder, user, logout }}
						/>
					</Grid>
				</Container>
			</CustomContainer>
		</>
	);
}
