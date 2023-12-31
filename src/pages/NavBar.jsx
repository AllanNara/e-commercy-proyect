import ContentPasteSearchSharpIcon from '@mui/icons-material/ContentPasteSearchSharp';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Category } from "../services/index.js";
import AccountWidget from "./components/NavBar/AccountWidget.jsx";
import CategoryMenu from "./components/NavBar/CategoryMenu.jsx";
import CartWidget from "./components/NavBar/CartWidget.jsx";
import Brand from "./components/NavBar/Brand.jsx";

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
		<div className="body-body">
			<Box
				sx={{
					bgcolor: "#f9f9f9",
					borderStyle: "double",
					borderColor: "#efefef",
					padding: 1,
				}}
				className="navbar"
			>
				<Container>
					<Grid container justifyContent="space-between" alignItems="center">
						<Link to={`/`}>
							<Brand />
						</Link>

						<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
							<Link to={`/orders`}>
								<Tooltip title="Busca tu orden">
									<IconButton size="medium">
										<ContentPasteSearchSharpIcon
											sx={{
												":hover": { color: "chocolate" },
												width: 30,
												height: 30,
												color: "#434343",
											}}
										/>
									</IconButton>
								</Tooltip>
							</Link>

							<Link to={`/favorites`}>
								<Tooltip title="Mis favoritos">
									<IconButton size="medium">
										<FavoriteIcon
											sx={{
												":hover": { color: "chocolate" },
												width: 30,
												height: 30,
												color: "#434343",
											}}
										/>
									</IconButton>
								</Tooltip>
							</Link>

							<Link to={!user ? "/login" : "/"}>
								<AccountWidget {...{ logout, user }} />
							</Link>
							<Link to={`/cart`}>
								<CartWidget load={load} />
							</Link>
						</Box>
					</Grid>
				</Container>
			</Box>
			<Box
				sx={{
					bgcolor: "#222",
					padding: 1,
					display: "flex",
					justifyContent: "center",
				}}
			>
				<CategoryMenu
					categories={categoryList}
					setShow={setShowCategories}
					show={showCategories}
				/>
			</Box>

			<Box className="main-box">
				<Outlet />
			</Box>
		</div>
	);
}
