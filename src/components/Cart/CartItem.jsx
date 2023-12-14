import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import Counter from "../common/Counter";
import { useCallback } from "react";
import useStore from "../../hooks/useStore";
import Spinner from "../common/Spinner";
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
			<CardMedia
				component="img"
				alt={title}
				height="100"
				image={thumbnail}
				sx={{ width: 100, objectFit: "contain", ml: 2, borderRadius: 2 }}
			/>

			<CardContent
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					gap: 5,
					alignItems: "center",
				}}
			>
				<Link to={`/item/${id}`}>
					<Typography variant="h6" sx={{ minWidth: "100%", width: 240, color: "cadetblue"}} fontSize={18}>
						{title}
					</Typography>
				</Link>

				<Typography variant="body2" color="text.secondary">
					Price: ${price}
				</Typography>

				<Typography variant="body2" color="text.secondary">
					Quantity: {quantity}
				</Typography>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						marginTop: "auto",
						flexDirection: "column",
					}}
				>
					{loading ? (
						<Spinner msg="" styles={{ gap: 4, marginTop: 2, height: "10px" }} size={20} />
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
				<Typography
					variant="body1"
					fontWeight={400}
					fontSize={17.2}
					sx={{ marginTop: "auto" }}
				>
					Subotal: ${total}
				</Typography>

				<IconButton
					color="error"
					size="large"
					onClick={() => removeItem(id)}
					sx={{ marginTop: "auto", mr: 2 }}
				>
					<DeleteIcon />
				</IconButton>
			</CardContent>
		</Card>
	);
}

CartItem.propTypes = {
	item: PropTypes.object,
};

export default CartItem;
