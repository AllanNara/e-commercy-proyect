import useAuth from "../../../hooks/useAuth";
import useForm from "../../../hooks/useForm";
import { checkErrors } from "../utils";
import LoginForm from "./LoginForm";

export default function Login() {
	const fields = ["email", "password"];
	const cb = checkErrors();

	const { formData, inputChange, errors, validateForm, resetForm } = useForm(fields, cb);
	const { signIn, signInWithGoogle } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (validateForm()) {
				await signIn(formData.email, formData.password);
			}
		} catch (error) {
			console.error(`Error al autenticar: ${error}`);
		}
		resetForm()
	};

	return (
		<>
			<LoginForm {...{ inputChange, errors, handleSubmit, formData }} />
			<button onClick={signInWithGoogle}>Ingresar con Google</button>
		</>
	);
}
