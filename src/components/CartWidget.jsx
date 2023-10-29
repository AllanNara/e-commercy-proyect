import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';

export default function CartWidget() {
  return (
    <Box sx={{
      borderRadius: "10px",
      padding: "3px",
      bgcolor: "whitesmoke"
    }}>
      <ShoppingCartIcon/> 
      <span className='notify'>2</span>
    </Box>
  )
}
