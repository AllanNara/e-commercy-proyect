import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import Counter from "../common/Counter";
import { useCallback } from "react";
import useStore from "../../hooks/useStore";
import Spinner from "../common/Spinner";

function CartItem({ item }) {
	const { id, quantity, title, price, thumbnail, total } = item;
	const { removeItem, updateItem, setRefresh } = useCart();
	const { loading, productList } = useStore();
	const availableStock = productList.find((prod) => prod.id === id)?.stock;

	const updateQuantity = useCallback((quantity) => {
		const updated = updateItem(id, quantity);
		setRefresh(true);
		return updated
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setRefresh, id]); 

	return (
		<li
			style={{
				display: "flex",
				flexFlow: "row nowrap",
				width: "100%",
				padding: 10,
				justifyContent: "space-around",
				border: "solid red 1px",
				alignItems: "center",
			}}
		>
			<img src={thumbnail} width={50} height={50} alt="producto" />
			<div style={{ width: "20%" }}>
				<Link to={`/item/${id}`}>
					<p>{title}</p>
				</Link>
			</div>
			<p>${price}</p>
			<p>Cantidad: {quantity}</p>
			<div>
				{loading ? (
					<Spinner msg="" styles={{gap: 4, marginTop: 2, height: "10px"}} size={20}/>
				) : availableStock === 1 ? (
					<span>Ultima unidad disponible</span>
				) : availableStock > 1 ? (
					<span>Unidades disponibles: {availableStock}</span>
				) : (
					<span>No hay unidades diponibles</span>
				)}
				<Counter
					initial={quantity}
					maximum={availableStock}
					minimum={1}
					cb={updateQuantity}
				/>
			</div>
			<p>TOTAL: ${total}</p>
			<button style={{ height: "max-content" }} onClick={() => removeItem(id)}>
				X
			</button>
		</li>
	);
}

CartItem.propTypes = {
	item: PropTypes.object,
};

export default CartItem;
