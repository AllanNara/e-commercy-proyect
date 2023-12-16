import { Typography } from "@mui/material";

export default function Brand() {
	return (
		<>
			<Typography
				variant="h3"
				sx={{
					fontFamily: "Playfair Display",
					fontWeight: 500,
					padding: 1,
          borderRadius: 7,
					":hover": { bgcolor: "#eee" },
				}}
			>
				E-ComMercy
			</Typography>
		</>
	);
}
