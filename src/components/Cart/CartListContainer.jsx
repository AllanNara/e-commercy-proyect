import CartList from "./CartList";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CartListContainer() {
	const { getCart } = useCart();
	const { cart, total_items, total_to_pay } = getCart();

	useEffect(() => {
		console.log({cart})
	}, [cart])
	
	return (
		<div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: 25}}>
			<Link to={"/"}>
				<button>{"<"} Volver al listado</button>
			</Link>
			{total_items ? (
				<>
					<CartList list={cart} toPay={total_to_pay} totalQuantity={total_items} />
					<Link to="/cart/checkout">
            <span style={{padding: 15, border: "1px solid black"}}>Continuar con la compra</span>
          </Link>
				</>
			) : (
				<p>No hay productos</p>
			)}
		</div>
	);
}
