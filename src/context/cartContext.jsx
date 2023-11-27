import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
	const [cartList, setCartList] = useState([
		{
			id: 1, 
			title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
			price: 109.95, 
			thumbnail: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
			quantity: 2
		},
		{
			id: 2, 
			title: "Mens Casual Premium Slim Fit T-Shirts ", 
			price: 	22.3, 
			thumbnail: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", 
			quantity: 4
		},
		{
			id: 3, 
			title: 	"Mens Cotton Jacket", 
			price: 55.99, 
			thumbnail: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 
			quantity: 3
		},
		{
			id: 4, 
			title: "Mens Casual Slim Fit", 
			price: 15.99, 
			thumbnail: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", 
			quantity: 1
		},
	]);

	const addToCart = (item, quantity) => {
		const { title, price, thumbnail, id } = item;
    if(isInCart(id)) return false
		setCartList((list) => [...list, { id, title, price, thumbnail, quantity }]);
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
