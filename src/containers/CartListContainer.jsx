import CartList from "../components/CartList"
import useCart from "../hooks/useCart"

export default function CartListContainer() {
  const { cartList } = useCart() 

  return (
    <>
      { cartList.length ? (<CartList list={cartList} />) : (<p>No hay productos</p>) }
    </>
    )
}