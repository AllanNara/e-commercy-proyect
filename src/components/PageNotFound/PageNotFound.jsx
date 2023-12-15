import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";

export default function PageNotFound() {
	const { state } = useLocation();

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 3,
				mb: 4,
				mt: 8,
			}}
		>
			{state && state.message && (
				<Typography variant="h5" fontFamily={"Poppins"} color="grey">
					{state.message}
				</Typography>
			)}
			<ProductionQuantityLimitsSharpIcon sx={{ fontSize: 150, userSelect: "none" }} />
			<Typography variant="h4" fontFamily={"Poppins"}>
				No encontramos lo que buscaba...
			</Typography>
			<Typography variant="h5" fontFamily={"Poppins"}>
				Pero puedes seguir navegando por nuestra pagína
			</Typography>
			<Link to="/">
				<Typography variant="body2" fontSize={20} color="cadetblue">
					Volver a la pagina principal
				</Typography>
			</Link>
		</Box>
	);
}
