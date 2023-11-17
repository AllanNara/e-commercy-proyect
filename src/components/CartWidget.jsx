import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PropTypes } from "prop-types"
import Box from '@mui/material/Box';

function CartWidget({ items }) {
  return (
    <Box sx={{
      borderRadius: "10px",
      padding: "3px",
      bgcolor: "whitesmoke"
    }}>
      <ShoppingCartIcon/> 
      <span className='notify'>{items}</span>
    </Box>
  )
}

CartWidget.propTypes = {
  items: PropTypes.number.isRequired
}

export default CartWidget