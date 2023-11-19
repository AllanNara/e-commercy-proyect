import PropTypes from 'prop-types';

function Item({ item }) {
  const { title, price, image } = item;
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "30%",
      height: "300px",
      margin: "auto",
      padding: 10,
      border: "1px solid black",
    }}
    >
      <img src={image} alt={title} style={{ height: "100px", width: "100px" }} />
      <h4>{title}</h4>
      <p>Precio: {price}</p>
      <button>Ver detalle</button>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item