import CartList from "./CartList"
import useCart from "../../hooks/useCart"
import { Link } from "react-router-dom"

export default function CartListContainer() {
  const { getCart } = useCart()
  const { cart, total_items } = getCart() 

  return (
    <>
      { total_items ? (
      <>
        <CartList list={cart} />
        <Link to="/cart/checkout">Finalizar compra</Link>
      </>
      ) : (<p>No hay productos</p>) }
      
    </>
    )
}