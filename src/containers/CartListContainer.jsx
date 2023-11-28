import CartList from "../components/CartList"
import useCart from "../hooks/useCart"

export default function CartListContainer() {
<<<<<<< Updated upstream
  const { getCart } = useCart()
  const { cart, total_items } = getCart() 
=======
  const { cartList } = useCart();
>>>>>>> Stashed changes

  return (
    <>
      { total_items ? (<CartList list={cart} />) : (<p>No hay productos</p>) }
    </>
    )
}