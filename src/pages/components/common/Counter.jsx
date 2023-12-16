import { Box, Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import PropTypes from "prop-types";
import useCount from "../../../hooks/useCount";

function Counter({ initial, minimum, maximum, cb, disabled = false }) {
	const { count, decrement, increment } = useCount(initial, minimum, maximum);

	useEffect(() => {
		!disabled && cb(count)
	}, [count, cb, disabled]);

	return (
		<Box
			sx={{
				backgroundColor: "#fff",
				border: 1,
				borderColor: "#ccc",
				width: "95%",
				margin: "auto",
				height: "auto",
				display: "flex",
				justifyContent: "space-around",
			}}
		>
			<Button disabled={disabled} onClick={decrement}>
				<RemoveIcon fontSize="small" />
			</Button>
			<Typography component={"span"} margin={"auto"} color={disabled ? "grey" : "inherit"}>
				{maximum ? count : 0}
			</Typography>
			<Button disabled={disabled} onClick={increment}>
				<AddIcon fontSize="small" />
			</Button>
		</Box>
	);
}

Counter.propTypes = {
	initial: PropTypes.number,
	minimum: PropTypes.number,
	maximum: PropTypes.number,
	cb: PropTypes.func,
	disabled: PropTypes.bool
};

export default Counter;
