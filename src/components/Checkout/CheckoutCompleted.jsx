import { Container, Typography } from "@mui/material";
import { useLocation, Navigate } from "react-router-dom";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

function CheckoutCompleted() {
	const { state } = useLocation();

	if (!state || !state.order || state.from !== "/cart/checkout") {
		return <Navigate to="/" replace />;
	}

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "70vh",
				gap: 2,
			}}
		>
			<CheckCircleOutlinedIcon color="success" sx={{ fontSize: 130 }} />
			<Typography variant="h3" fontFamily={"Poppins"} >¡Gracias por tu compra!</Typography>
			<Typography variant="h5">Tu numero de order es: {state.order}</Typography>
		</Container>
	);
}
export default CheckoutCompleted;
