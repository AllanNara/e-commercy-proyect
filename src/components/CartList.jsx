import PropTypes from 'prop-types'
import CartItem from './CartItem'

function CartList({ list }) {
  return (
    <div style={{width: "70vw"}}>
      {list.map((item) => {
        return (
          <CartItem key={item.id} {...{ item }} />
        )
      })}
    </div>
  )
}

CartList.propTypes = {
  list: PropTypes.array.isRequired
}

export default CartList