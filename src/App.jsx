import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FirebaseProvider } from "./context/firestoreContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import CartListContainer from "./components/Cart/CartListContainer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Test from "./components/helpers/Test.jsx";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<FirebaseProvider>
					<CartProvider>
						<NavBar />
						<Routes>
							<Route exact path="/test" element={<Test />}/>
							<Route exact path="/" element={<ItemListContainer greeting={"¡Bienvenido!"} />}/>
							<Route exact path="/category/:categoryId" element={<ItemListContainer />} />
							<Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
							<Route exact path="/cart" element={<CartListContainer />} />
							<Route exact path="/cart/checkout" element={<Checkout />} />
							<Route path="*" element={<h1 style={{ marginLeft: 520 }}>{"404 NOT FOUND"}</h1>} />
						</Routes>
					</CartProvider>
				</FirebaseProvider>
			</BrowserRouter>
		</>
	);
}
