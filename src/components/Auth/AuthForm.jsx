import { Box, Button, FormControl, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import InputForm from "../common/InputForm";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GoogleLogo from "../../assets/google.svg";
import useAuth from "../../hooks/useAuth";

function AuthForm({
	inputChange,
	errors,
	handleSubmit,
	formData,
	isRegister,
	resetForm,
}) {
	const navigate = useNavigate();
	const { signInWithGoogle } = useAuth();

	useEffect(() => {
		return () => {
			if (Object.keys(errors).length) resetForm();
		};
	}, [resetForm, errors]);

	return (
		<Paper sx={{ mx: 15, mt: 3, mb: -5, p: 3, pb: 10 }} variant="outlined">
			<Box
				sx={{
					margin: "auto",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography variant="h4" fontWeight={500}>
					{isRegister ? "Registrarse" : "Iniciar Sesión"}
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						p: 2,
						mb: 4,
						mt: 2,
						width: "50%",
					}}
				>
					<Typography
						onClick={() => isRegister && navigate("/login")}
						component={"p"}
						fontWeight={400}
						fontSize={18}
						className={`authLink ${!isRegister ? "authActivate" : ""}`}
					>
						Iniciar Sesión
					</Typography>
					<Typography
						onClick={() => !isRegister && navigate("/register")}
						component={"p"}
						fontWeight={400}
						fontSize={18}
						className={`authLink ${isRegister ? "authActivate" : ""}`}
					>
						Registrarse
					</Typography>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", width: 400, mt: -6, mb: 3 }}>
					<Button
						onClick={signInWithGoogle}
						variant="contained"
						type="submit"
						sx={{
							bgcolor: "#eee",
							color: "#000",
							":hover": { bgcolor: "#000", color: "#fff" },
							mt: 4,
							gap: 2,
						}}
					>
						<Typography variant="overline">Ingresar con Google</Typography>
						<Box component={"img"} src={GoogleLogo} sx={{ width: 30 }} />
					</Button>
				</Box>
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
							{isRegister ? "Iniciar Sesión" : "Crear cuenta"}
						</Typography>
					</Button>
					<Typography variant="overline" sx={{ ":hover": { fontWeight: 600 }, alignSelf: "center", mt: 3 }}>
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
			</Box>
		</Paper>
	);
}

AuthForm.propTypes = {
	inputChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	formData: PropTypes.object.isRequired,
	isRegister: PropTypes.bool,
	resetForm: PropTypes.func,
};

export default AuthForm;
