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
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import useCount from "../hooks/useCount";

function ItemCount({ stock, initial, onAdd }) {
	const { count, decrement, increment  } = useCount(initial, 1, stock)
	const [notification, setNotification] = useState(false);

	const handleOpen = () => setNotification(true);
	
	const handleClose = () => {
		onAdd(count)
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
						<Box
							sx={{
								backgroundColor: "#fff",
								border: 1,
								borderColor: "#ccc",
								width: "95%",
								margin: "auto",
								height: "auto",
								display: "flex",
								justifyContent: "space-around",
							}}
						>
							<Button onClick={decrement}>
								<RemoveIcon fontSize="small" />
							</Button>
							<Typography component={"span"} margin={"auto"}>
								{stock ? count : 0}
							</Typography>
							<Button onClick={increment}>
								<AddIcon fontSize="small" />
							</Button>
						</Box>
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
								Has agregado con exito {count} producto/s
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
	initial: PropTypes.number,
};

export default ItemCount;
