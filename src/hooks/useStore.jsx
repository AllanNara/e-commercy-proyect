import { useContext } from "react";
import { StoreContext } from "../contexts/storeContext";

const useStore = () => {
	const context = useContext(StoreContext);
	if (!context) {
		throw new Error("useCart debe ser utilizado dentro de un CartProvider");
	}
	return context;
};

export default useStore;
