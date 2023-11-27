import { CircularProgress, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Spinner({ msg = "Cargando contenido..." }) {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-evenly",
				height: "100%",
				gap: 7,
				marginTop: 8,
			}}
		>
			<CircularProgress size={90} />
			<Typography variant="h5">{msg}</Typography>
		</Container>
	);
}

Spinner.propTypes = {
	msg: PropTypes.string,
};

export default Spinner;
