import PropTypes from "prop-types";

function CheckoutForm({ formData, inputChange, errors, validateForm }) {

	const handleConfirm = async(e) => {
		e.preventDefault();
		validateForm();
	};

  const handleChange = ({target}) => {
    const { name, value } = target;
    inputChange({ key: name, value })
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
					onSubmit={handleConfirm}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
						<label style={{ width: "100%" }} htmlFor="phoneField">
							Telefono:
						</label>
						<input
							type="tel"
							name="phone"
							id="phoneField"
							value={formData.phone}
							onChange={handleChange}
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
							style={{ padding: "2px 20px 2px 20px", marginTop: 15}}
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
	validateForm: PropTypes.func,
};

export default CheckoutForm;
