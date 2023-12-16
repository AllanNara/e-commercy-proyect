import { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Counter from "../common/Counter";

function ItemCount({ stock, initial, onAdd, changeQuantity, quantity }) {
	const [notification, setNotification] = useState(false);
	const [sendQuantity, setSendQuantity] = useState(false);

	let msgCounter =
		stock === 1
			? "¡Ultima unidad disponible!"
			: stock > 1
			? `${stock} Unidades disponibles`
			: "No hay unidades disponibles";

	const handleOpen = () => setNotification(true);

	const handleClose = () => {
		onAdd();
		setNotification(false);
		setSendQuantity(true);
	};

	return (
		<Grid container flexDirection={"column"} gap={2.5} display={"flex"}>
			<Grid item alignSelf={"flex-start"}>
				<Paper
					sx={{
						backgroundColor: "#eee",
						height: 90,
						width: 270,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography
						variant="body1"
						component={"p"}
						color={"#666"}
						fontWeight={600}
						pt={2}
						fontSize={15}
						textAlign={"center"}
					>
						{!sendQuantity ? `${msgCounter}` : `(${quantity}) Productos agregados`}
					</Typography>
					<Counter
						initial={initial}
						maximum={stock}
						minimum={1}
						cb={changeQuantity}
						disabled={sendQuantity}
					/>
				</Paper>
			</Grid>

			<Grid item sx={{ alignSelf: "stretch" }}>
				{sendQuantity ? (
					<Link to={"/cart"} style={{ color: "inherit", textDecoration: "inherit" }}>
						<Button variant="outlined" sx={{ width: "100%", p: 1 }}>
							<Typography
								textTransform="initial"
								variant="body1"
								fontWeight={200}
								fontSize={14}
							>
								Finalizar compra
							</Typography>
						</Button>
					</Link>
				) : (
					<Button
						variant="outlined"
						sx={{ width: "100%", p: 1 }}
						onClick={handleOpen}
						disabled={!stock}
					>
						<Typography
							textTransform="initial"
							variant="body1"
							fontWeight={200}
							fontSize={13}
						>
							Agregar al carrito
						</Typography>
					</Button>
				)}
				<Dialog open={notification} onClose={handleClose}>
					<DialogTitle>Producto/s agregado/s</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Has agregado con exito {quantity} producto/s
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<IconButton onClick={handleClose} autoFocus>
							<CloseIcon />
						</IconButton>
					</DialogActions>
				</Dialog>
			</Grid>
		</Grid>
	);
}

ItemCount.propTypes = {
	stock: PropTypes.number.isRequired,
	onAdd: PropTypes.func.isRequired,
	changeQuantity: PropTypes.func.isRequired,
	initial: PropTypes.number,
	quantity: PropTypes.number,
};

export default ItemCount;
