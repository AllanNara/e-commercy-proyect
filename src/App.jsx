import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./contexts/storeContext.jsx";
import { CartProvider } from "./contexts/cartContext.jsx";
import AppRoutes from "./components/Routes/AppRoutes.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<StoreProvider>
						<CartProvider>
							<AppRoutes />
						</CartProvider>
					</StoreProvider>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
}
