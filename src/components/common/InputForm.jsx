import { Alert, FormLabel, TextField } from "@mui/material";
import PropTypes from "prop-types";

function InputForm({ label, error, data, inputChange, name = "" }) {
	return (
		<>
			<FormLabel error={!!error}>{label}: </FormLabel>
			<TextField
				name={name}
				error={!!error}
				value={data}
				onChange={inputChange}
				variant="standard"
			/>
			{error && <Alert severity="error">{error}</Alert>}
		</>
	);
}

InputForm.propTypes = {
  error: PropTypes.string,
  data: PropTypes.string,
  inputChange: PropTypes.func.isRequired,
  label: PropTypes.string,
	name: PropTypes.string
};

export default InputForm;
