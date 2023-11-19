import PropTypes from "prop-types";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
	const { title, price, description, category, image } = item;

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
        <button style={{alignSelf: "flex-start"}}>{'<'} Volver al listado</button>
				<img src={image} alt={title} style={{ height: "150px", width: "150px" }} />
				<h2>{title}</h2>
				<span>Categoria: {category}</span>
				<span>Precio: {price}</span>
				<p>{description}</p>
				<ItemCount initial={1} stock={10} />
			</div>
		</>
	);
}

ItemDetail.propTypes = {
	item: PropTypes.object.isRequired,
};

export default ItemDetail;
