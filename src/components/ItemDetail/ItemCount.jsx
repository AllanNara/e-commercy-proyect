import PropTypes from "prop-types";
import { useState } from "react";
import {
	Box,
	Button,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Counter from "../common/Counter";

function ItemCount({ stock, initial, onAdd, changeQuantity, quantity }) {
	const [notification, setNotification] = useState(false);

	const handleOpen = () => setNotification(true);
	
	const handleClose = () => {
		onAdd()
		setNotification(false);
	};

	return (
		<Container>
			<Grid container flexDirection={"column"} gap={2} alignItems={"center"}>
				<Grid item>
					<Box
						sx={{
							backgroundColor: "#eee",
							height: 100,
							width: 270,
						}}
					>
						<Typography
							variant="body1"
							component={"p"}
							color={"#666"}
							fontWeight={600}
							height={"57%"}
							p={1.5}
							fontSize={14}
						>
							{stock ? `${stock} Unidades disponibles` : "No hay unidades disponibles"}
						</Typography>
						<Counter initial={initial} maximum={stock} minimum={1} cb={changeQuantity}/>
					</Box>
				</Grid>
				<Grid item>
					<Button
						variant="outlined"
						sx={{ width: 230, p: 1 }}
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
		</Container>
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
