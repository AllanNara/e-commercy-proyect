import useAuth from "../../../hooks/useAuth";
import useForm from "../../../hooks/useForm";
import { checkErrors } from "../utils";
import RegisterForm from "./RegisterForm";

export default function Register() {
	const fields = ["email", "password", "checkPass"];
  const cb = checkErrors("register")

	const { formData, inputChange, errors, validateForm, resetForm } = useForm(fields, cb);
	const { register, signInWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(validateForm()) {
        const response = await register(formData.email, formData.password);
        console.log({response})
      }
    } catch(error) {
      console.error(`Error al autenticar: ${error}`)
    }
    resetForm()
  }

	return (
    <>
      <RegisterForm {...{ inputChange, errors, handleSubmit, formData }} />
      <button onClick={signInWithGoogle}>Ingresar con Google</button>
    </>
  );
}
