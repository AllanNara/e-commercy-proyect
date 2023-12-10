import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CartStorage from "./storage/CartStorage";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);
	const [refresh, setRefresh] = useState(false)

	const cartStorage = new CartStorage(cartList, setCartList, setRefresh);
	const {addToCart,clearCart,getCart,products,removeItem,setList,updateItem } = cartStorage

	useEffect(() => {
		const str = localStorage.getItem("cartSaved");
		const cartSaved = JSON.parse(str) || [];
		setCartList(cartSaved);
	}, []);

	useEffect(() => {
		refresh && setRefresh(false)
	}, [refresh])

	return (
		<CartContext.Provider value={
			{addToCart,clearCart,getCart,products,removeItem,setList,updateItem,
				setRefresh
			}
		}>
			{children}
		</CartContext.Provider>
	);
};

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
