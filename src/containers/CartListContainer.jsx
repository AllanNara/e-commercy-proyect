import CartList from "../components/CartList"
import useCart from "../hooks/useCart"

export default function CartListContainer() {
  const { getCart } = useCart()
  const { cart, total_items } = getCart() 

  return (
    <>
      { total_items ? (<CartList list={cart} />) : (<p>No hay productos</p>) }
    </>
    )
}