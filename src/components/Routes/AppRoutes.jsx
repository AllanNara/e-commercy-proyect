import { Route, Routes } from 'react-router-dom'
import Test from '../common/Test'
import ItemListContainer from '../ItemList/ItemListContainer'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'
import CartListContainer from '../Cart/CartListContainer'
import Checkout from '../Checkout/Checkout'
import NavBar from '../NavBar/NavBar'
import useStore from '../../hooks/useStore'

export default function AppRoutes() {
  const { productList } = useStore()

  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/" element={<ItemListContainer greeting={"¡Bienvenido!"} items={productList} />} />
        <Route exact path="/category/:categoryKey" element={<ItemListContainer />} />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<CartListContainer />} />
        <Route exact path="/cart/checkout" element={<Checkout />} />
        <Route path="*" element={<h1 style={{ marginLeft: 520 }}>{"404 NOT FOUND"}</h1>} />
      </Route>
    </Routes>
  )
}
