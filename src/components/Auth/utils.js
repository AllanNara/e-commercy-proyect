export const checkErrors = (to = "login") => {
	return (formData) => {
		const { email, password, checkPass } = formData;
		const errors = {};

		if (!email.trim().length) errors.email = "No se ingreso un correo";
		else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim()))
			errors.email = "El formato de correo es valido";

		if (!password.trim().length) errors.password = "No se ingreso una contraseña";

		if (to === "register") {
			if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password.trim()))
				errors.password =
					"La contraseña debe incluir al menos una letra mayuscula, una minuscula y un numero";
			if (password.trim() !== checkPass.trim())
				errors.checkPass = "Las contraseñas no coinciden";
		}

		return errors;
	};
};
