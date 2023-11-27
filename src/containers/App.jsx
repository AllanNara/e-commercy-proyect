import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer.jsx";
import ItemListContainer from "./ItemListContainer.jsx";
import CartListContainer from "./CartListContainer.jsx";
import { CartProvider } from "../context/cartContext.jsx";
import NavBar from "./NavBar.jsx";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<CartProvider>
					<NavBar />
					<Routes>
						<Route exact path="/" element={<ItemListContainer greeting={"¡Bienvenido!"} />} />
						<Route exact path="/category/:categoryid" element={<ItemListContainer />} />
						<Route exact path="/item/:itemid" element={<ItemDetailContainer />} />
						<Route exact path="/cart" element={<CartListContainer />} />
						<Route path="*" element={<h1 style={{marginLeft: 520}}>{"404 NOT FOUND"}</h1>} />
					</Routes>
				</CartProvider>
			</BrowserRouter>
		</>
	);
}
