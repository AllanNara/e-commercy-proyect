import ItemDetailContainer from "./ItemDetailContainer.jsx";
import ItemListContainer from "./ItemListContainer.jsx";
import NavBar from "./NavBar.jsx";

export default function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting={"Saludos"} />
			<br />
			<br />
			<br />
			<ItemDetailContainer />
		</>
	);
}
