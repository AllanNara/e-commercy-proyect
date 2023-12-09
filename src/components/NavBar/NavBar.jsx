import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CartWidget from "./CartWidget.jsx";
import CategoryMenu from "./CategoryMenu.jsx";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Category } from "../../services/index.js";
import Brand from "./Brand.jsx";
import PropTypes from "prop-types";

NavBar.propTypes = {
	user: PropTypes.any,
	logout: PropTypes.func,
	load: PropTypes.bool,
};

export default function NavBar({ user, logout, load = false }) {
	const [categoryList, setCategoryList] = useState([]);
	const [showCategories, setShowCategories] = useState(false);

	useEffect(() => {
		if (showCategories) {
			Category.readAll()
				.then((data) => setCategoryList(data))
				.catch((err) => console.log("Fatal error: ", err));
		}
	}, [showCategories]);

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
						<Link to={`/`}>
							<Brand />
						</Link>
						<CategoryMenu
							categories={categoryList}
							setShow={setShowCategories}
							show={showCategories}
						/>
						{load ? (
							<span>. . .</span>
						) : !user ? (
							<>
								<Link to={`/login`}>Ingresar</Link>
								<Link to={`/register`}>Registrarse</Link>
							</>
						) : (<button onClick={logout}>Cerrar sesion</button>)}
						<Link to={`/cart`}>
							<CartWidget load={load}/>
						</Link>
					</Grid>
				</Container>
			</Box>

			<Outlet />
		</>
	);
}
