import PropTypes from 'prop-types'
import useCart from '../hooks/useCart';

function CartItem({ item }) {
  const { id, quantity, title, price, thumbnail, total } = item;
  const { removeItem } = useCart()

  return (
      <div style={{display: "flex", flexFlow: "row nowrap", width: "100%", padding: 3, justifyContent: "space-around", border: "solid red 1px"}}>
        <img src={thumbnail} width={50} height={50} alt="producto" />
        <p>{title}</p>
        <p>${price}</p>
        <p>{quantity}</p>
        <p>TOTAL: ${total}</p>
        <button onClick={() => removeItem(id)}>remove</button>
      </div>
    )
}

CartItem.propTypes = {
  item: PropTypes.object
}

export default CartItem