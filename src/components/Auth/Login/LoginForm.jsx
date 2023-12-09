import PropTypes from "prop-types";

function LoginForm({ inputChange, errors, handleSubmit, formData }) {
	return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Correo electronico</label>
        <input name="email" id="email" type="email" onChange={inputChange} value={formData.email}/>
        {errors.email && (<span style={{color: "#f00"}}>*{errors.email}</span>)}
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input name="password" id="password" type="password" onChange={inputChange} value={formData.password}/>
        {errors.password && (<span style={{color: "#f00"}}>*{errors.password}</span>)}
      </div>
      <input type="submit" value="Ingresar" />
    </form>
  );
}

LoginForm.propTypes = {
	inputChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired
};

export default LoginForm;
