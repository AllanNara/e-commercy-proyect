import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CheckoutForm({ formData, inputChange, errors, createOrder, user }) {
	if (!user) {
		return (
				<Box>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Para seguir adelante con la compra {" "}
						<Link to={"/login"} >
							inicie sesion 
						</Link> {" "}
							con su cuenta
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						¿Nuevo en la pagína? {" "}
						<Link to="/register">
							Registrate ahora
						</Link>
					</Typography>
				</Box>
		);
	}

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					height: "50vh",
					justifyContent: "center",
				}}
			>
				<form
					onSubmit={createOrder}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "15px",
						alignItems: "flex-start",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							width: "auto",
							gap: 3,
						}}
					>
						<label style={{ width: "100%" }} htmlFor="nameField">
							Nombre:
						</label>
						<input
							type="text"
							name="name"
							id="nameField"
							value={formData.name}
							onChange={inputChange}
						/>
						{errors && errors.name && (
							<span
								style={{
									color: "red",
									flexGrow: 1,
									alignSelf: "center",
									textAlign: "left",
								}}
							>
								*{errors.name}
							</span>
						)}
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							width: "auto",
							gap: 3,
						}}
					>
						<label style={{ width: "100%" }} htmlFor="emailField">
							Correo electronico:
						</label>
						<input
							type="email"
							name="email"
							id="emailField"
							value={formData.email}
							onChange={inputChange}
						/>
						{errors && errors.email && (
							<span
								style={{
									color: "red",
									flexGrow: 1,
									alignSelf: "center",
									textAlign: "left",
								}}
							>
								*{errors.email}
							</span>
						)}
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							width: "auto",
							gap: 3,
						}}
					>
						<label style={{ width: "100%" }} htmlFor="emailConfirmField">
							Confirmar correo electronico:
						</label>
						<input
							type="email"
							name="emailConfirm"
							id="emailConfirmField"
							value={formData.emailConfirm}
							onChange={inputChange}
						/>
						{errors && errors.emailConfirm && (
							<span
								style={{
									color: "red",
									flexGrow: 1,
									alignSelf: "center",
									textAlign: "left",
								}}
							>
								*{errors.emailConfirm}
							</span>
						)}
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							width: "auto",
							gap: 3,
						}}
					>
						<label style={{ width: "100%" }} htmlFor="phoneField">
							Telefono:
						</label>
						<input
							type="tel"
							name="phone"
							id="phoneField"
							value={formData.phone}
							onChange={inputChange}
						/>
						{errors && errors.phone && (
							<span
								style={{
									color: "red",
									flexGrow: 1,
									alignSelf: "center",
									textAlign: "left",
								}}
							>
								*{errors.phone}
							</span>
						)}
					</div>
					<div>
						<input
							type="submit"
							value="Continuar con la compra"
							style={{ padding: "2px 20px 2px 20px", marginTop: 15 }}
						/>
					</div>
				</form>
			</div>
		</>
	);
}

CheckoutForm.propTypes = {
	inputChange: PropTypes.func.isRequired,
	formData: PropTypes.object.isRequired,
	errors: PropTypes.object,
	createOrder: PropTypes.func.isRequired,
	user: PropTypes.any,
};

export default CheckoutForm;
