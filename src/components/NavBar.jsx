import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CartWidget from "./CartWidget";
import PositionedMenu from "./PositionedMenu";

export default function NavBar() {
	return (
		<Box
			sx={{
				bgcolor: "antiquewhite",
				borderStyle: "solid",
				borderColor: "burlywood",
			}}
		>
			<Container>
				<Grid container justifyContent="space-between" alignItems="center">
					<h3>Brand</h3>
					<PositionedMenu />
					<CartWidget />
				</Grid>
			</Container>
		</Box>
	);
}
