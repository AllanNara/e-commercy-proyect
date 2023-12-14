import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CustomButtom({ content, handleClick, customS }) {
	const customStyles = {
		bgcolor: "#eee",
		color: "#000",
		":hover": { bgcolor: "#000", color: "#fff" },
		mt: 4,
		...customS
	}

	return (
		<Button
			onClick={handleClick ? handleClick : null}
			variant="contained"
			type="submit"
			sx={customStyles}
		>
			<Typography variant="overline">{content}</Typography>
		</Button>
	);
}

CustomButtom.propTypes = {
	content: PropTypes.string,
	handleClick: PropTypes.func,
	customS: PropTypes.object
};

export default CustomButtom;
