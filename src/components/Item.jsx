import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Item({ item }) {
  const { id, title, price, thumbnail } = item;
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "30%",
      height: "400px",
      margin: "auto",
      padding: 10,
      border: "1px solid black",
    }}
    >
      <img src={thumbnail} alt={title} style={{ height: "auto", width: "300px", objectFit: "cover", overflow: "hidden" }} />
      <h4>{title}</h4>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item