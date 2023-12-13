import { Category } from "../../services/index.js";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountWidget from "./AccountWidget.jsx";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Box from "@mui/material/Box";
import Brand from "./Brand.jsx";
import CartWidget from "./CartWidget.jsx";
import CategoryMenu from "./CategoryMenu.jsx";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";

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
					bgcolor: "#f9f9f9",
					borderStyle: "solid",
					borderColor: "#668",
					padding: 1,
				}}
			>
				<Container>
					<Grid container justifyContent="space-between" alignItems="center">
						<Link to={`/`}>
							<Brand />
						</Link>

						<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
							<Link to={`/orders`}>
								<Tooltip title="Mis compras">
									<IconButton size="medium" sx={{ visibility: user ? "" : "hidden" }}>
										<BeenhereIcon
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
									<IconButton size="medium" sx={{ visibility: user ? "" : "hidden" }}>
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

			<Outlet />
		</>
	);
}
