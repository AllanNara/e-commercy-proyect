import ItemListContainer from "../components/ItemListContainer.jsx";
import NavBar from "./NavBar.jsx";

export default function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting={"Saludos"}/>
		</>
	);
}
