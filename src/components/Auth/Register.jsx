import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import AuthPage from "./AuthPage";
import { checkErrors } from "./utils";
import PropTypes from "prop-types";

Register.propTypes = {
	isRegister: PropTypes.bool,
};

export default function Register() {
	const fields = ["email", "password", "checkPass", "checkEmail"]
	const cb = checkErrors("register");

	const { formData, inputChange, errors, validateForm, resetForm } = useForm(fields, cb);
	const { register } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (validateForm()) {
				await register(formData.email, formData.password);
				resetForm();
			}
		} catch (error) {
			console.error(`Error al autenticar: ${error}`);
		}
	};

	return <AuthPage {...{ inputChange, errors, handleSubmit, formData, resetForm }} isRegister={true} />
}
