import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CartWidget from "./CartWidget.jsx";
import PositionedMenu from "./PositionedMenu.jsx";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Category } from "../../services/index.js";

export default function NavBar() {
	const [categoryList, setCategoryList] = useState([]);
	const [showCategories, setShowCategories] = useState(false)

	useEffect(() => {
		if(showCategories) { 
			Category.readAll()
				.then(data => setCategoryList(data))
				.catch(err => console.log("Fatal error: ", err))
		}
	}, [showCategories])


	return (
		<>
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
					<PositionedMenu categories={categoryList} setShow={setShowCategories} show={showCategories} />
					<Link to={`/cart`}><CartWidget items={2}/></Link>
				</Grid>
			</Container>
		</Box>
		
		<Outlet />
		</>
	);
}
