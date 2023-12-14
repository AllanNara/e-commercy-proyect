import { Alert, FormLabel, TextField, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function InputForm({ label, error, data, inputChange, name = "" }) {
	return (
		<FormGroup>
			<FormLabel sx={{ ":before": { content: error ? '"*"' : '""' } }} error={!!error}>
				{label}:{" "}
			</FormLabel>
			<TextField
				name={name}
				error={!!error}
				value={data}
				onChange={inputChange}
				variant="outlined"
				size="small"
			/>
			{error && (
				<Alert variant="outlined" sx={{ borderStyle: "none", mt: -0.5, mb: -1 }} severity="error">
					{error}
				</Alert>
			)}
		</FormGroup>
	);
}

InputForm.propTypes = {
	error: PropTypes.string,
	data: PropTypes.string,
	inputChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	name: PropTypes.string,
};

export default InputForm;
