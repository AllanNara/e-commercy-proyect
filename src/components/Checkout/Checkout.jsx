import CheckoutForm from "./CheckoutForm";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import useCart from "../../hooks/useCart";
import { Order } from "../../services";
import { doc } from "firebase/firestore";
import firestoreInstance from "../../services/firebase.config";
import useStore from "../../hooks/useStore";
import Brief from "./Brief";
import { Container, Grid } from "@mui/material";
import { checkErrors } from "./utils";

import PropTypes from 'prop-types'

Checkout.propTypes = {
	user: PropTypes.any
}

export default function Checkout({ user }) {
	const fieldsForm = ["first_name", "last_name", "phone", "address"];
	const { formData, inputChange, resetForm, errors, validateForm } = useForm(fieldsForm, checkErrors);

	const [orderId, setOrderId] = useState(null);
	const { cart, total_to_pay, total_items, clearCart } = useCart();
	const { refresh } = useStore();

	const buildNewOrder = () => {
		const order = {
			buyer: { ...formData },
			items: cart.map(({ id, quantity }) => ({
				product: doc(firestoreInstance, "/products/" + id),
				quantity,
			})),
			total_to_pay,
			total_items,
		};

		resetForm() && clearCart();
		return order
	}

	const createOrder = (e) => {
		e.preventDefault();
		if (!validateForm()) return;
		const newOrder = buildNewOrder()
		Order.create(newOrder)
			.then((order) => setOrderId(order))
			.catch((err) => console.log("Fatal error: ", err))
			.finally(() => refresh());
	};

	if (orderId) {
		return <p>{orderId}</p>;
	}

	return (
		<Container sx={{ display: "flex", flexDirection: "row", mt: 5 }}>
			<Grid sx={{ width: "50%" }}>
				<Brief {...{ cart, total_to_pay, total_items }} />
			</Grid>
			<Grid sx={{ width: "40%" }}>
				<CheckoutForm {...{ formData, inputChange, errors, createOrder, user }} />
			</Grid>
		</Container>
	);
}
