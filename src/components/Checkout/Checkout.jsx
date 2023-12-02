import CheckoutForm from "./CheckoutForm";
import useForm from "../../hooks/useForm";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useFirestore from "../../hooks/useFirestore";

export default function Checkout() {
	const [isMounted, setIsMounted] = useState(false);
	const [orderId, setOrderId] = useState(null);
	const { formData, inputChange, resetForm, errors, validateForm } = useForm(
		"email",
		"phone",
		"name"
	);
	const { getCart, clearCart } = useCart();
	const { Order } = useFirestore();

	useEffect(() => {
		if (isMounted && !Object.keys(errors).length) {
			createOrder()
				.then((data) => setOrderId(data))
				.catch((err) => console.log("fatal error: ", err));
		} else {
			setIsMounted(true);
		}
	}, [errors]);

	const { cart, total_to_pay, total_items } = getCart();
	const createOrder = async () => {
		const newOrder = {
			buyer: { ...formData },
			items: cart.map((item) => {
				delete item.thumbnail;
				return item;
			}),
			total_to_pay,
			total_items,
		};
		const order = await Order.create(newOrder);
		resetForm();
		clearCart();
		return order
	};

	return (
		<>
			<CheckoutForm {...{ formData, inputChange, errors, validateForm }} />
			{orderId ? <p>{orderId}</p> : ""}
		</>
	);
}
