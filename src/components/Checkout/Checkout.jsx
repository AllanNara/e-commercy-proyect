import CheckoutForm from "./CheckoutForm";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import useCart from "../../hooks/useCart";
import { Order } from "../../services";
import { doc } from "firebase/firestore";
import firestoreInstance from "../../services/firebase.config";
import useStore from "../../hooks/useStore";

export default function Checkout() {
	const fieldsForm = ["email", "phone", "name", "emailConfirm"];
	const verifyFields = ({ email, phone, name, emailConfirm }) => {
		const err = {};
		if (!email.length) err.email = "Falta email";
		if (!emailConfirm.length) err.emailConfirm = "Falta confirmar email";
		if(email !== emailConfirm) err.emailConfirm = "Los correos no coinciden"
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
	const { refresh } = useStore()

	const createOrder = () => {
		const newOrder = {
			buyer: { ...formData },
			items: cart.map(({ id, quantity }) => ({
				product: doc(firestoreInstance, "/products/" + id),
				quantity,
			})),
			total_to_pay,
			total_items,
		};
		resetForm();
		clearCart();
		Order.create(newOrder).then((order) => setOrderId(order)).then(() => refresh());
	};

	if (orderId) {
		return <p>{orderId}</p>;
	}

	return (
		<CheckoutForm {...{ formData, inputChange, errors, validateForm, createOrder }} />
	);
}
