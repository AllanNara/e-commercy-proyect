import { useContext } from "react";
import { FirebaseContext } from "../context/firestoreContext";

const useFirestore = () => {
	const context = useContext(FirebaseContext);
	if (!context) {
		throw new Error("useCart debe ser utilizado dentro de un CartProvider");
	}
	return context;
};

export default useFirestore;
