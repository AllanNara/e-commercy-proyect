import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CartWidget from "../components/CartWidget.jsx";
import PositionedMenu from "./PositionedMenu.jsx";

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
					<CartWidget items={2}/>
				</Grid>
			</Container>
		</Box>
	);
}
