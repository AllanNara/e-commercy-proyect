import ItemDetailContainer from "./ItemDetailContainer.jsx";
import ItemListContainer from "./ItemListContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route exact path="/" element={<ItemListContainer greeting={"¡Bienvenido!"} />} />
					<Route exact path="/category/:categoryid" element={<ItemListContainer />} />
					<Route exact path="/item/:itemid" element={<ItemDetailContainer />} />
					<Route exact path="/cart" element={<h1>{"Carrito"}</h1>} />
					<Route path="*" element={<h1 style={{marginLeft: 520}}>{"404 NOT FOUND"}</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
