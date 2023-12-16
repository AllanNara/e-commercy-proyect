import { Box, Typography } from "@mui/material";
import LoyaltySharpIcon from "@mui/icons-material/LoyaltySharp";

function FavoriteHeader() {
	return (
		<Box
			sx={{
				width: "100.5%",
				padding: 2,
				bgcolor: "#222",
				border: "outset 1px #aaa",
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#eee",
				gap: 3,
			}}
		>
			<Typography
				variant="h4"
				fontFamily={"Poppins"}
				fontWeight={300}
				textAlign={"center"}
			>
				Tus productos favoritos
			</Typography>
			<LoyaltySharpIcon sx={{ fontSize: 60 }} />
		</Box>
	);
}
export default FavoriteHeader;
