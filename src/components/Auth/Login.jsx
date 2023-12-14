import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import AuthPage from "./AuthPage";
import { checkErrors } from "./utils";
import PropTypes from "prop-types";

Login.propTypes = {
	isRegister: PropTypes.bool,
};

export default function Login() {
	const fields = ["email", "password"];
	const cb = checkErrors();

	const { formData, inputChange, errors, validateForm, resetForm } = useForm(fields, cb);
	const { signIn } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (validateForm()) {
        await signIn(formData.email, formData.password);
				resetForm();
			}
		} catch (error) {
			console.error(`Error al autenticar: ${error}`);
		}
	};

	return (
		<>
			<AuthPage {...{ inputChange, errors, handleSubmit, formData, resetForm }}/>
		</>
	);
}
