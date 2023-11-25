import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CartWidget from "../components/CartWidget.jsx";
import PositionedMenu from "../components/PositionedMenu.jsx";
import { Link } from "react-router-dom";

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
					<Link to={`/`}><h3>E-ComMercy</h3></Link>
					<PositionedMenu />
					<Link to={`/cart`}><CartWidget items={2}/></Link>
				</Grid>
			</Container>
		</Box>
	);
}
