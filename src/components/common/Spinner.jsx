import { CircularProgress, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Spinner({ msg = "Cargando contenido...", styles = {}, size = 90 }) {
	let st = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		height: "100%",
		gap: 7,
		marginTop: 8,
		...styles,
	};
	return (
		<Container sx={st}>
			<CircularProgress size={size} color="inherit" />
			<Typography variant="h5">{msg}</Typography>
		</Container>
	);
}

Spinner.propTypes = {
	msg: PropTypes.string,
	styles: PropTypes.object,
	size: PropTypes.number,
};

export default Spinner;
