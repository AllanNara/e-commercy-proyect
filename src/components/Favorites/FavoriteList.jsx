import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import Item from "../ItemList/Item";
import CustomButtom from "../common/CustomButtom";
import useCart from "../../hooks/useCart";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function FavoriteList({ favs, addFavorite, removeFavorite, isInList }) {
	const [notification, setNotification] = useState(false);
	const handleOpen = () => setNotification(true);
	const handleClose = () => setNotification(false);

	const { addToCart } = useCart();

	const addProductToCart = (product) => {
		addToCart(product, 1);
		handleOpen();
		removeFavorite(product.id);
	};

	function sortByPriority(arr) {
		return arr.sort((a, b) => {
			if (a.stock === 1 && b.stock !== 1) return -1;
			else if (a.stock !== 1 && b.stock === 1) return 1;

			if (a.status === false && b.status === true) return 1;
			else if (a.status === true && b.status === false) return -1;
			return 0;
		});
	}
	const favsSort = sortByPriority(favs);
	
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				width: "90%",
				justifyContent: "center",
				pt: 5,
				gap: 2,
			}}
		>
			{favsSort.map((product) => (
				<Box key={product.id} sx={{ display: "flex", flexDirection: "column" }}>
					<Item
						item={product}
						isFavorite={isInList(product.id)}
						{...{ addFavorite, removeFavorite }}
					/>
					<CustomButtom
						content={"¡Agregar ahora al carrito!"}
						cs={{ mt: 1, gap: 2 }}
						disabled={!product.status}
						handleClick={() => addProductToCart(product)}
						showIcon={() => <AddCircleOutlineSharpIcon sx={{ color: "#444" }} />}
					/>
				</Box>
			))}
			<Dialog open={notification} onClose={handleClose}>
				<DialogTitle>Producto agregado</DialogTitle>
				<DialogContent>
					<DialogContentText>¡Agregaste tu producto al carrito!</DialogContentText>
				</DialogContent>
				<DialogActions>
					<IconButton onClick={handleClose} autoFocus>
						<CloseIcon />
					</IconButton>
				</DialogActions>
			</Dialog>
		</Box>
	);
}

FavoriteList.propTypes = {
	favs: PropTypes.array.isRequired,
	addFavorite: PropTypes.func,
	removeFavorite: PropTypes.func,
	isInList: PropTypes.func,
};

export default FavoriteList;
