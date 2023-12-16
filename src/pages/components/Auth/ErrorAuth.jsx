import { Alert, AlertTitle } from "@mui/material";
import PropTypes from "prop-types";
function ErrorAuth({ isRegister, existError }) {
	if (existError) {
		return (
			<>
				{!isRegister ? (
					<Alert sx={{ mb: 2, width: "40%"}} severity="error">
						<AlertTitle>Credenciales incorrectas</AlertTitle>
						Email o contraseña incorrectos
					</Alert>
				) : (
					<Alert sx={{ mb: 2, width: "40%" }} severity="error">
						<AlertTitle>El correo ya esta en uso</AlertTitle>
						Intente nuevamente con otro correo
					</Alert>
				)}
			</>
		);
	}
}

ErrorAuth.propTypes = {
	isRegister: PropTypes.bool,
	existError: PropTypes.bool,
};

export default ErrorAuth;
