import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

function ItemDetail({ item }) {
	const { title, price, description, category, image } = item;
	const [quantityAdded, setQuantity] = useState(0);

	const handleOnAdd = (quantity) => {
		setQuantity(quantity);
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "50%",
					margin: "auto",
					padding: 15,
					border: "1px solid black",
					marginTop: 7,
				}}
			>
				<Link to={"/"}>
					<button style={{ alignSelf: "flex-start" }}>{"<"} Volver al listado</button>
				</Link>
				<img src={image} alt={title} style={{ height: "150px", width: "150px" }} />
				<h2>{title}</h2>
				<span>Categoria: {category}</span>
				<span>Precio: {price}</span>
				<p>{description}</p>
				{quantityAdded > 0 ? (
					<Link to={"/cart"} style={{ color: "inherit", textDecoration: "inherit" }}>
						<Button variant="outlined" sx={{ width: 230, p: 1 }}>
							<Typography
								textTransform="initial"
								variant="body1"
								fontWeight={200}
								fontSize={13}
							>
								Finalizar compra
							</Typography>
						</Button>
					</Link>
				) : (
					<ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
				)}
			</div>
		</>
	);
}

ItemDetail.propTypes = {
	item: PropTypes.object.isRequired,
};

export default ItemDetail;
