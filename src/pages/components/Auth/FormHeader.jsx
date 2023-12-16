import { Box, Button, Typography } from "@mui/material";
import GoogleLogo from "../../../assets/google.svg";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function FormHeader({ isRegister, signInWithGoogle }) {
	const navigate = useNavigate();
	return (
		<>
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
		</>
	);
}

FormHeader.propTypes = {
	signInWithGoogle: PropTypes.func.isRequired,
	isRegister: PropTypes.bool.isRequired,
};
export default FormHeader;
