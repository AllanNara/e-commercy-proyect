import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const isInCart = (itemId) => {
		return cartList.some((item) => item.id === itemId);
	};

	const addToCart = (item, quantity) => {
		const { title, price, thumbnail, id } = item;
		if (isInCart(id)) return false;
		setCartList((list) => [
			...list,
			{
				id,
				title,
				price,
				thumbnail,
				quantity,
				total: Number((price * quantity).toFixed(2)),
			},
		]);
		return true;
	};

	const removeItem = (itemId) => {
		if (!isInCart(itemId)) return null;
		setCartList((list) => list.filter((item) => item.id !== itemId));
		return itemId;
	};

	const clearCart = () => {
		setCartList([]);
	};

	const getCart = () => {
		return {
			cart: cartList,
			total_items: cartList.reduce((acc, curr) => acc + curr.quantity, 0),
			total_to_pay: cartList.reduce((acc, curr) => acc + curr.total, 0),
		};
	};

	return (
		<CartContext.Provider
			value={{
				getCart,
				addToCart,
				removeItem,
				clearCart,
				isInCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
