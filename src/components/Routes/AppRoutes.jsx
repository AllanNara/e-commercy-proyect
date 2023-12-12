import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../ItemList/ItemListContainer'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'
import CartListContainer from '../Cart/CartListContainer'
import Checkout from '../Checkout/Checkout'
import NavBar from '../NavBar/NavBar'
import PageNotFound from '../PageNotFound/PageNotFound'
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import PublicRoutes from './PublicRoutes'
import useAuth from '../../hooks/useAuth'
import Spinner from '../common/Spinner'

export default function AppRoutes() {
  const { logout, user, loadingUser } = useAuth();

  if(loadingUser) return (
    <>
      <NavBar user={user} logout={logout} load={loadingUser}/>
      <Spinner/>
    </>
  )

  return (
    <Routes>
      <Route element={<NavBar user={user} logout={logout}/>}>
        <Route exact path="/" element={<ItemListContainer greeting={"¡Bienvenido!"} />} />
        <Route element={<PublicRoutes redirectTo='/' user={user}/>}>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Route>
        <Route exact path="/categories/:categoryKey" element={<ItemListContainer />} />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<CartListContainer />} />
        <Route exact path="/cart/checkout" element={<Checkout user={user} />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
