import { Route, Routes } from "react-router-dom";
import CartListContainer from "../pages/CartListContainer";
import Checkout from "../pages/Checkout";
import Completed from "../pages/Completed";
import Favorites from "../pages/Favorites";
import Footer from "../pages/Footer";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import ItemListContainer from "../pages/ItemListContainer";
import Login from "../pages/Login";
import NavBar from "../pages/NavBar";
import NotFound from "../pages/NotFound";
import Order from "../pages/Order";
import PublicRoutes from "./PublicRoutes";
import Register from "../pages/Register";
import Spinner from "../pages/components/common/Spinner";
import useAuth from "../hooks/useAuth";

export default function AppRoutes() {
	const { logout, user, loadingUser } = useAuth();

	if (loadingUser)
		return (
			<>
				<NavBar user={user} logout={logout} load={loadingUser} />
				<Spinner />
			</>
		);

	return (
		<>
			<Routes>
				<Route element={<NavBar user={user} logout={logout} />}>
					<Route exact path="/" element={<ItemListContainer />} />
					<Route element={<PublicRoutes redirectTo="/" user={user} />}>
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/register" element={<Register />} />
					</Route>
					<Route exact path="/categories/:categoryKey" element={<ItemListContainer />} />
					<Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
					<Route exact path="/cart" element={<CartListContainer />} />
					<Route exact path="/cart/checkout" element={<Checkout user={user} logout={logout} />} />
					<Route exact path="/cart/checkout/completed" element={<Completed />} />
					<Route exact path="/favorites" element={<Favorites />} />
					<Route exact path="/orders" element={<Order />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}
