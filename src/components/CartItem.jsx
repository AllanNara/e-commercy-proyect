import PropTypes from 'prop-types'

function CartItem({ item }) {
  const { id, quantity, title, price, thumbnail } = item;

  return (
      <div style={{display: "flex", flexFlow: "row nowrap", width: "100%", padding: 3, justifyContent: "space-around", border: "solid red 1px"}}>
        <img src={thumbnail} width={50} height={50} alt="producto" />
        <p style={{textOverflow: "ellipsis"}}>{title}</p>
        <p>${price}</p>
        <p>{quantity}</p>
        <button>remove</button>
      </div>
    )
}

CartItem.propTypes = {
  item: PropTypes.object
}

export default CartItem