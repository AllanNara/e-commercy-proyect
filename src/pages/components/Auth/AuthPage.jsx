import PropTypes from "prop-types";
import AuthForm from "./AuthForm";
import { Box, Paper } from "@mui/material";

AuthPage.propTypes = {
	isRegister: PropTypes.bool,
	inputChange: PropTypes.func,
	errors: PropTypes.object,
	handleSubmit: PropTypes.func,
	formData: PropTypes.object,
	errorAuth: PropTypes.bool,
};

export default function AuthPage({
	inputChange,
	errors,
	handleSubmit,
	formData,
	errorAuth,
	isRegister = false,
}) {
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
				<AuthForm
					{...{
						inputChange,
						errors,
						handleSubmit,
						formData,
						isRegister,
						errorAuth,
					}}
				/>
			</Box>
		</Paper>
	);
}
