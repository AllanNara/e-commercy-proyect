import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";
import AuthPage from "./components/Auth/AuthPage";
import { checkErrors } from "./utils/auth";
import { FirebaseError } from "firebase/app";
import { useState } from "react";

Login.propTypes = {
	isRegister: PropTypes.bool,
};

export default function Login() {
	const [errorAuth, setErrorAuth] = useState(false);
	const fields = ["email", "password"];
	const cb = checkErrors();

	const { formData, inputChange, errors, validateForm, resetForm } = useForm(fields, cb);
	const { signIn } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorAuth(false);
		try {
			if (validateForm()) await signIn(formData.email, formData.password);
		} catch (error) {
			if (!(error instanceof FirebaseError))
				return console.error(`Unknow catch error: ${error}`);
			if (error.code === "auth/cancelled-popup-request") return;
			if (error.code === "auth/invalid-login-credentials") setErrorAuth(true);
		} finally {
			resetForm();
		}
	};

	return <AuthPage {...{ inputChange, errors, handleSubmit, formData, errorAuth }} />;
}
