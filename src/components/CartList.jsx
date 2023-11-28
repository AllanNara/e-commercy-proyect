import PropTypes from 'prop-types'
import CartItem from './CartItem'

function CartList({ list }) {
  return (
    <div>
      <ul style={{width: "90%"}}>
        {list.map((item) => {
          return (
            <CartItem key={item.id} {...{ item }} />
          )
        })}
      </ul>
    </div>
  )
}

CartList.propTypes = {
  list: PropTypes.array.isRequired
}

export default CartList