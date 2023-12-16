import { Box, Button, FormControl, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";
import InputForm from "../common/InputForm";
import FormHeader from "./FormHeader";
import ErrorAuth from "./ErrorAuth";


AuthForm.propTypes = {
	inputChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	formData: PropTypes.object.isRequired,
	isRegister: PropTypes.bool,
	errorAuth: PropTypes.bool,
};

function AuthForm({
	inputChange,
	errors,
	handleSubmit,
	formData,
	isRegister,
	errorAuth,
}) {
	const { signInWithGoogle } = useAuth();

	return (
		<>
			<FormHeader {...{ isRegister, signInWithGoogle }} />
			<ErrorAuth isRegister={isRegister} existError={errorAuth} />
			<Box
				component={"form"}
				onSubmit={handleSubmit}
				sx={{ display: "flex", flexDirection: "column", width: 400 }}
			>
				<FormControl sx={{ gap: 2 }}>
					<InputForm
						inputChange={inputChange}
						data={formData.email}
						error={errors.email}
						label="Correo electronico"
						name="email"
					/>
					{isRegister && (
						<InputForm
							inputChange={inputChange}
							data={formData.checkEmail}
							error={errors.checkEmail}
							label="Confirmar correo electronico"
							name="checkEmail"
						/>
					)}
					<InputForm
						inputChange={inputChange}
						data={formData.password}
						error={errors.password}
						label="Contraseña"
						name="password"
					/>
					{isRegister && (
						<InputForm
							inputChange={inputChange}
							data={formData.checkPass}
							error={errors.checkPass}
							label="Confirmar contraseña"
							name="checkPass"
						/>
					)}
				</FormControl>
				<Button
					variant="contained"
					type="submit"
					sx={{
						bgcolor: "#eee",
						color: "#000",
						":hover": { bgcolor: "#000", color: "#fff" },
						mt: 4,
					}}
				>
					<Typography variant="overline">
						{!isRegister ? "Iniciar Sesión" : "Crear cuenta"}
					</Typography>
				</Button>
				<Typography
					variant="overline"
					sx={{ ":hover": { fontWeight: 600 }, alignSelf: "center", mt: 3 }}
				>
					{!isRegister ? (
						<>
							¿Aun no tienes una cuenta?
							<Link to={"/register"}> Registrate.</Link>
						</>
					) : (
						<>
							¿Ya tienes una cuenta?
							<Link to={"/login"}> Inicia sesión.</Link>
						</>
					)}
				</Typography>
			</Box>
		</>
	);
}

export default AuthForm;
