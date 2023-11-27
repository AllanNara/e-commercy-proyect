import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const addToCart = (item, quantity) => {
		const { title, price, id } = item;
    if(isInCart(id)) return false
		setCartList((list) => [...list, { id, title, price, quantity }]);
    return true
	};

	const removeItem = (itemId) => {
		if(!isInCart(itemId)) return null;
    setCartList((list) => list.filter((item) => item.id !== itemId));
    return itemId
	};

	const clearCart = () => {
		setCartList([]);
	};

	const isInCart = (itemId) => {
		return cartList.some((item) => item.id === itemId);
	};

	return (
		<CartContext.Provider
			value={{
				cartList,
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
