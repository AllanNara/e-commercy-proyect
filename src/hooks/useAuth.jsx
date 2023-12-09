import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuth = () => {
	const auth = useContext(AuthContext);
	if (!auth) throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");

	return auth;
};

export default useAuth;
