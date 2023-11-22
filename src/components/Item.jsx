import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Item({ item }) {
  const { id, title, price, image } = item;
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
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item