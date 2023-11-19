import PropTypes from 'prop-types';

function Item({ item }) {
  const { title, description, price, image } = item;
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Precio: {price}</p>
      <p>{description}</p>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item