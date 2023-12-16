import { Box, Typography, FormControl, Button, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import InputForm from "../common/InputForm";

function CheckoutForm({ formData, inputChange, createOrder, user, logout, errors = {} }) {
	const navigate = useNavigate();

	const logoutAndRedirect = () => {
		logout().then(() => {
			navigate("/");
		});
	};

	if (!user) {
		return (
			<Box>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Para seguir adelante con la compra{" "}
					<Link to={"/login"}>
						<span style={{ color: "cadetblue" }}>inicie sesion</span>
					</Link>{" "}
					con su cuenta
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					¿Nuevo en la pagína?{" "}
					<Link to="/register">
						<span style={{ color: "cadetblue" }}>Registrate ahora</span>
					</Link>
				</Typography>
			</Box>
		);
	}

	return (
		<>
			<Box sx={{ display: "flex", flexDirection: "column", mt: -2.3}}>
				<Typography variant="body2" sx={{ fontSize: 19, alignSelf: "flex-start", mb: 1 }}>
					Esta comprando como: <span style={{ color: "#33f" }}>{user.email}</span>...
				</Typography>
				<Button onClick={logoutAndRedirect} sx={{ alignSelf: "flex-end" }}>
					{" "}
					Cerrar sesion
				</Button>
			</Box>
			<Paper
				sx={{
					backgroundColor: "#eee",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					p: "20px 0",
				}}
			>
				<Typography variant="h5" sx={{ mb: 3, alignSelf: "flex-start", ml: 4 }}>
					Complete sus datos:
				</Typography>
				<Box component={"form"} onSubmit={createOrder} autoComplete="off">
					<FormControl sx={{ gap: 1.2 }}>
						<InputForm
							label="Nombre"
							error={errors.first_name}
							data={formData.first_name}
							name="first_name"
							{...{ inputChange }}
						/>
						<InputForm
							label="Apellido"
							error={errors.last_name}
							data={formData.last_name}
							name="last_name"
							{...{ inputChange }}
						/>
						<InputForm
							label="Dirección"
							error={errors.address}
							data={formData.address}
							name="address"
							{...{ inputChange }}
						/>
						<InputForm
							label="Teléfono"
							error={errors.phone}
							data={formData.phone}
							name="phone"
							{...{ inputChange }}
						/>
						<Button variant="outlined" sx={{ width: 230, p: 1, mt: 2 }} type="submit">
							<Typography variant="overline" fontWeight={400} fontSize={13}>
								Confirmar compra
							</Typography>
						</Button>
					</FormControl>
				</Box>
			</Paper>
		</>
	);
}

CheckoutForm.propTypes = {
	inputChange: PropTypes.func.isRequired,
	formData: PropTypes.object.isRequired,
	errors: PropTypes.object,
	createOrder: PropTypes.func.isRequired,
	logout: PropTypes.func,
	user: PropTypes.any,
};

export default CheckoutForm;
