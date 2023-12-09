import PropTypes from "prop-types";

function RegisterForm({ inputChange, errors, handleSubmit, formData }) {
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
      <div>
        <label htmlFor="checkPass">Repetir constraseña</label>
        <input name="checkPass" id="checkPass" type="password" onChange={inputChange} value={formData.checkPass}/>
        {errors.checkPass && (<span style={{color: "#f00"}}>*{errors.checkPass}</span>)}
      </div>
      <input type="submit" value="Ingresar" />
    </form>
  );
}

RegisterForm.propTypes = {
	inputChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired
};

export default RegisterForm;
