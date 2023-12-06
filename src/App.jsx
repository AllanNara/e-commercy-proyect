import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./context/storeContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import AppRoutes from "./components/Routes/AppRoutes.jsx";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<StoreProvider>
					<CartProvider>
						<AppRoutes />
					</CartProvider>
				</StoreProvider>
			</BrowserRouter>
		</>
	);
}
