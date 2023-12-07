import CheckoutForm from "./CheckoutForm";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import useCart from "../../hooks/useCart";
import { Order } from "../../services";

export default function Checkout() {
	const fieldsForm = ["email", "phone", "name"];
	const verifyFields = ({ email, phone, name }) => {
		const err = {};
		if (!email.length) err.email = "Falta email";
		if (!phone.length) err.phone = "Falta telefono";
		if (!name.length) err.name = "Falta nombre";
		return err;
	};
	const { formData, inputChange, resetForm, errors, validateForm } = useForm(
		fieldsForm,
		verifyFields
	);

	const [orderId, setOrderId] = useState(null);
	const { getCart, clearCart } = useCart();
	const { cart, total_to_pay, total_items } = getCart();

	const createOrder = () => {
		const newOrder = {
			buyer: { ...formData },
			items: cart.map((item) => {
				delete item.thumbnail;
				return item;
			}),
			total_to_pay,
			total_items,
		};
		resetForm();
		clearCart();
		Order.create(newOrder).then((order) => setOrderId(order));
	};

	if (orderId) {
		return <p>{orderId}</p>;
	}

	return (
		<CheckoutForm {...{ formData, inputChange, errors, validateForm, createOrder }} />
	);
}
