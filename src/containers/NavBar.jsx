import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CartWidget from "../components/CartWidget.jsx";
import PositionedMenu from "../components/PositionedMenu.jsx";
import { Link } from "react-router-dom";
import useFirestore from "../hooks/useFirestore.jsx";
import { useEffect, useState } from "react";

export default function NavBar() {
	const [categoryList, setCategoryList] = useState([])
	const { Category } = useFirestore()

	useEffect(() => {
		Category.readAll()
			.then(data => setCategoryList(data))
			.catch(err => console.log("Fatal error: ", err))
	}, [Category])


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
					<PositionedMenu categories={categoryList} />
					<Link to={`/cart`}><CartWidget items={2}/></Link>
				</Grid>
			</Container>
		</Box>
	);
}
