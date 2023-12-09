import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CategoryMenu({ categories, show, setShow }) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		!show && setShow(true)
		setAnchorEl(event.currentTarget)
	};
	
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
					<Link to={`/categories/${key}`} key={id} state={{ categoryId: id }}>
						<MenuItem onClick={handleClose}>{name}</MenuItem>
					</Link>
				)) : (<MenuItem onClick={handleClose} sx={{fontSize: 30}}>...</MenuItem>)}
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