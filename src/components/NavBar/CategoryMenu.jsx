import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function CategoryMenu({ categories, show, setShow }) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		!show && setShow(true);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => setAnchorEl(null);

	return (
		<div>
			<Button id="basic-button" onClick={handleClick} sx={{ color: "#fff" }}>
				Buscar tus productos
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<NavLink to="/">
					<MenuItem
						sx={{
							display: "flex",
							justifyContent: "center",
							bgcolor: "#666",
							color: "#fff",
							":hover": { bgcolor: "#000", color: "#fff", fontWeight: 600 },
						}}
						onClick={handleClose}
					>
						Todas las categorías
					</MenuItem>
				</NavLink>
				{categories.length ? (
					categories.map(({ name, key, id }) => (
						<NavLink
							to={`/categories/${key}`}
							key={id}
							state={{ categoryId: id }}
						>
							<MenuItem
								onClick={handleClose}
								sx={{
									display: "flex",
									justifyContent: "center",
									bgcolor: "#666",
									color: "#fff",
									":hover": { bgcolor: "#000", color: "#fff", fontWeight: 600 },
								}}
							>
								{name}
							</MenuItem>
						</NavLink>
					))
				) : (
					<MenuItem
						onClick={handleClose}
						sx={{
							display: "flex",
							justifyContent: "center",
							bgcolor: "#666",
							color: "#fff",
							":hover": { bgcolor: "#000", color: "#fff" },
							fontSize: 30,
						}}
					>
						...
					</MenuItem>
				)}
			</Menu>
		</div>
	);
}

CategoryMenu.propTypes = {
	categories: PropTypes.array.isRequired,
	show: PropTypes.bool.isRequired,
	setShow: PropTypes.func.isRequired,
};

export default CategoryMenu;
