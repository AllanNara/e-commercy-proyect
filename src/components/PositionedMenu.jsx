import { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<div>
			<Button id="basic-button" onClick={handleClick} sx={{ color: "black" }}>
				Categorías
			</Button>
			<Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={handleClose}>Category1</MenuItem>
				<MenuItem onClick={handleClose}>Category2</MenuItem>
				<MenuItem onClick={handleClose}>Category3</MenuItem>
			</Menu>
		</div>
	);
}
