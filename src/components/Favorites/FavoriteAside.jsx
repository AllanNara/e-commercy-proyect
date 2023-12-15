import { Box, Typography } from "@mui/material";

function FavoriteAside() {
	return (
		<Box
			sx={{
				width: "50%",
				maxWidth: "20vw",
				minHeight: "80vh",
				bgcolor: "#222",
				borderTopStyle: "none",
				flex: "display",
				justifyContent: "center",
				mt: -0.5,
				zIndex: 1,
			}}
		>
			<Box sx={{ textAlign: "center", pt: 8, width: "70%", margin: "auto" }}>
				<Typography
					variant="body1"
					fontWeight={400}
					fontSize={18}
					fontFamily={"Poppins"}
					sx={{ color: "#eee", lineHeight: 1.8 }}
				>
					¡Recuerda que tus productos Favoritos pueden acabarse pronto!
				</Typography>
			</Box>
		</Box>
	);
}
export default FavoriteAside;
