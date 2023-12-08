import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	useEffect(() => {
		const str = localStorage.getItem("cartSaved");
		const cartSaved = JSON.parse(str) || [];
		if(cartSaved.length) setCartList(cartSaved)
	}, [])

	useEffect(() => {
		localStorage.setItem("cartSaved", JSON.stringify(cartList, null, 2))
	}, [cartList])

	const isInCart = (itemId) => {
		return cartList.some((item) => item.id === itemId);
	};

	const addToCart = (item, quantity) => {
		const { title, price, thumbnail, id } = item;
		if (isInCart(id)) {
			const findItem = cartList.find((item) => item.id === id);
			findItem.quantity = quantity;
			findItem.total = Number((price * quantity).toFixed(2));
			setCartList([...cartList]);
		} else {
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
		}
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
