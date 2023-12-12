import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CartStorage from "./storage/CartStorage";

function getInitialState() {
	const cart = localStorage.getItem("cartSaved");
	return cart ? JSON.parse(cart) : [];
}

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
	const [cartList, setCartList] = useState(getInitialState());
	const [refresh, setRefresh] = useState(false);

	const cartStorage = new CartStorage(cartList, setCartList);
	const { addToCart, clearCart, getCart, removeItem, updateItem } = cartStorage;

	useEffect(() => {
		refresh && setRefresh(false);
	}, [refresh, setRefresh]);

	useEffect(() => {
		localStorage.setItem("cartSaved", JSON.stringify(cartList, null, 2));
	}, [cartList]);

	return (
		<CartContext.Provider
			value={{
				addToCart,
				clearCart,
				removeItem,
				updateItem,
				setRefresh,
				...getCart(),
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
