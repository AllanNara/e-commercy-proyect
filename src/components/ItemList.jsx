import PropTypes from 'prop-types';
import Item from './Item';

function ItemList({ items }) {
  return (
    <div>
      {items.map(item => (<Item key={item.id} item={item} />))}
    </div>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemList