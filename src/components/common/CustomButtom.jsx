import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CustomButtom({ content, handleClick, cs, showIcon, disabled = false}) {
	const customStyles = {
		bgcolor: "#eee",
		color: "#000",
		":hover": { bgcolor: "#000", color: "#fff" },
		mt: 4,
		...cs
	}

	return (
		<Button
			onClick={handleClick ? handleClick : null}
			variant="contained"
			type="submit"
			disabled={disabled}
			sx={customStyles}
		>
			{showIcon && showIcon()}
			<Typography variant="overline">{content}</Typography>
		</Button>
	);
}

CustomButtom.propTypes = {
	content: PropTypes.string,
	handleClick: PropTypes.func,
	cs: PropTypes.object,
	showIcon: PropTypes.any,
	disabled: PropTypes.bool
};

export default CustomButtom;
