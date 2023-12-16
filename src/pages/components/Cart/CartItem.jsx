import { Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import PropTypes from "prop-types";
import Counter from "../common/Counter";
import Spinner from "../common/Spinner";
import useCart from "../../../hooks/useCart";
import useStore from "../../../hooks/useStore";

function CartItem({ item }) {
	const { id, quantity, title, price, thumbnail, total } = item;
	const { removeItem, updateItem, setRefresh } = useCart();
	const { loading, productList } = useStore();
	const availableStock = productList.find((prod) => prod.id === id)?.stock;

	const updateQuantity = useCallback(
		(quantity) => {
			const updated = updateItem(id, quantity);
			setRefresh(true);
			return updated;
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[setRefresh, id]
	);

	return (
		<Card sx={{ display: "flex", marginBottom: 2, py: 2 }}>
			<Box sx={{display: "flex", flexDirection: "row", alignItems: "center" }}>
				<CardMedia
					component="img"
					alt={title}
					height="100"
					image={thumbnail}
					sx={{ width: 100, objectFit: "contain", ml: 2, borderRadius: 2 }}
				/>
				<Link to={`/item/${id}`}>
					<Typography
						variant="h6"
						sx={{ minWidth: "100%", width: 240, color: "cadetblue", textAlign: "center" }}
						fontSize={18}
					>
						{title}
					</Typography>
				</Link>
			</Box>

			<CardContent
				sx={{
					flex: 1,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography variant="body2" color="text.secondary">
					Precio: ${price}
				</Typography>

				<Typography variant="body2" color="text.secondary">
					Cantidad: {quantity}
				</Typography>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						marginTop: "auto",
						flexDirection: "column",
						width: "25%",
						mt: -1
					}}
				>
					{loading ? (
						<Spinner msg="" styles={{ gap: 4, marginTop: 2, height: "10px" }} size={25} />
					) : availableStock === 1 ? (
						<Typography variant="caption">¡Ultima unidad disponible!</Typography>
					) : availableStock > 1 ? (
						<Typography variant="caption">
							Unidades disponibles: {availableStock}
						</Typography>
					) : (
						<Typography variant="caption">No hay unidades diponibles</Typography>
					)}
					<Counter
						initial={quantity}
						maximum={availableStock}
						minimum={1}
						cb={updateQuantity}
					/>
				</Box>
				<Box sx={{display: "flex", alignItems: "center"}}>
					<Typography
						variant="body1"
						fontWeight={400}
						fontSize={17.2}
					>
						Subotal: ${total}
					</Typography>

					<IconButton
						color="error"
						size="large"
						onClick={() => removeItem(id)}
						sx={{ mx: 2 }}
					>
						<DeleteIcon />
					</IconButton>
				</Box>
			</CardContent>
		</Card>
	);
}

CartItem.propTypes = {
	item: PropTypes.object,
};

export default CartItem;
