import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<div>
			<Button id="basic-button" onClick={handleClick} sx={{ color: "black" }}>
				Buscar por categoría
			</Button>
			<Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
				{["all", "electronics", "jewelery", "men's clothing", "women's clothing"].map(
					(category, index) => {
						let categoryName = "Todas las categorías";
						if(category === "electronics") categoryName = "Electronica";
						if(category === "jewelery") categoryName = "Joyería";
						if(category === "men's clothing") categoryName = "Ropa masculina";
						if(category === "women's clothing") categoryName = "Ropa femenina";
						return (
							<Link to={category !== "all" ? `/category/${category}` : "/"} key={index}>
								<MenuItem onClick={handleClose}>
									{categoryName}
								</MenuItem>
							</Link>
						);
					}
				)}
			</Menu>
		</div>
	);
}
