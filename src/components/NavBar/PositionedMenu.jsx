import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BasicMenu({ categories }) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<div>
			<Button id="basic-button" onClick={handleClick} sx={{ color: "black" }}>
				Buscar por categoría
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<Link to="/">
					<MenuItem onClick={handleClose}>Todas las categorías</MenuItem>
				</Link>
				{categories.length ? categories.map(({ name, key, id }) => (
					<Link to={`/category/${key}`} key={id}>
						<MenuItem onClick={handleClose}>{name}</MenuItem>
					</Link>
				)) : (<MenuItem onClick={handleClose} sx={{fontSize: 30}}>...</MenuItem>)}
			</Menu>
		</div>
	);
}

BasicMenu.propTypes = {
	categories: PropTypes.array.isRequired,
};

export default BasicMenu;
