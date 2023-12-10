import PropTypes from "prop-types";
import CartItem from "./CartItem";

function CartList({ list, toPay, totalQuantity }) {
	return (
		<div>
			<ul style={{ width: "85vw" }}>
				{list.map((item) => (
					<CartItem key={item.id} {...{ item }} />
				))}
			</ul>
      <div>
        <p>Cantidad de productos: {totalQuantity}</p>
        <p>Total a pagar: ${toPay}</p>
      </div>
		</div>
	);
}

CartList.propTypes = {
	list: PropTypes.array.isRequired,
	toPay: PropTypes.number,
	totalQuantity: PropTypes.number
};

export default CartList;
