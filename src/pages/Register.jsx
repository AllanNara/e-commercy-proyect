import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";
import AuthPage from "./components/Auth/AuthPage";
import { checkErrors } from "./utils/auth";
import { FirebaseError } from "firebase/app";
import { useState } from "react";

Register.propTypes = {
	isRegister: PropTypes.bool,
};

export default function Register() {
	const [errorAuth, setErrorAuth] = useState(false);
	const fields = ["email", "password", "checkPass", "checkEmail"];
	const cb = checkErrors("register");

	const { formData, inputChange, errors, validateForm, resetForm } = useForm(fields, cb);
	const { register } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorAuth(false);
		try {
			if (validateForm()) await register(formData.email, formData.password);
		} catch (error) {
			if (!(error instanceof FirebaseError))
				return console.error(`Unknow catch error: ${error}`);
			if (error.code === "auth/cancelled-popup-request") return;
			if (error.code === "auth/email-already-in-use") setErrorAuth(true);
		} finally {
			resetForm();
		}
	};

	return (
		<AuthPage
			{...{ inputChange, errors, handleSubmit, formData, errorAuth }}
			isRegister={true}
		/>
	);
}
