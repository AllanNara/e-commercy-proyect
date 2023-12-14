import AuthForm from "./AuthForm";
import PropTypes from "prop-types";

AuthPage.propTypes = {
	isRegister: PropTypes.bool,
	inputChange: PropTypes.func,
	errors: PropTypes.object,
	handleSubmit: PropTypes.func,
	formData: PropTypes.object,
	resetForm: PropTypes.func,
};

export default function AuthPage({
	inputChange,
	errors,
	handleSubmit,
	formData,
	resetForm,
	isRegister = false,
}) {
	return (
		<>
			<AuthForm
				{...{ inputChange, errors, handleSubmit, formData, isRegister, resetForm }}
			/>
		</>
	);
}
