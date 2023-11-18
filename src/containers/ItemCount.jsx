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

export default function ItemCount() {
	const [count, setCount] = useState(1);
	const [open, setOpen] = useState(false);

	const incrementQuantity = () => {
    if (count <= 4) {
      setCount((count) => count + 1);
    }
	};

	const decrementQuantity = () => {
		if (!(count < 2)) {
			setCount((count) => count - 1);
		}
	};

	const onAdd = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container>
			<Grid
				container
				flexDirection={"column"}
				gap={2}
				alignItems={"center"}
			>
				<Grid item>
					<ProductCount
						incrementQuantity={incrementQuantity}
						decrementQuantity={decrementQuantity}
						count={count}
					/>
				</Grid>
				<Grid item>
					<AddToCartButton onAdd={onAdd} />
					<Dialog
						open={open}
						onClose={handleClose}
					>
						<DialogTitle>
							Producto/s agregado/s
						</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Has agregado con exito {count} producto/s
							</DialogContentText>
						</DialogContent>
						<DialogActions>
              <IconButton onClick={handleClose} autoFocus>
                <CloseIcon/>
              </IconButton>
						</DialogActions>
					</Dialog>
				</Grid>
			</Grid>
		</Container>
	);
}

function ProductCount({ incrementQuantity, decrementQuantity, count }) {
	return (
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
				height={"57%"}
				p={0.6}
				fontSize={13}
			>
				Camisa tiger <br /> <span><strong>5 Unidades</strong></span>
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
				<Button onClick={decrementQuantity}>
					<RemoveIcon fontSize="small" />
				</Button>
				<Typography component={"span"} margin={"auto"}>
					{count}
				</Typography>
				<Button onClick={incrementQuantity}>
					<AddIcon fontSize="small" />
				</Button>
			</Box>
		</Box>
	);
}

ProductCount.propTypes = {
	incrementQuantity: PropTypes.func.isRequired,
	decrementQuantity: PropTypes.func.isRequired,
	count: PropTypes.number.isRequired,
};

function AddToCartButton({ onAdd }) {
	return (
		<Button
			variant="outlined"
			sx={{
				width: 230,
				p: 1,
			}}
			onClick={onAdd}
		>
			<Typography textTransform="initial" variant="body1" fontWeight={200} fontSize={13}>
				Agregar al carrito
			</Typography>
		</Button>
	);
}

AddToCartButton.propTypes = {
	onAdd: PropTypes.func.isRequired,
};
