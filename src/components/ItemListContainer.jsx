import Container from "@mui/material/Container";
import { PropTypes } from "prop-types"

function ItemListContainer({ greeting }) {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignContent: "center"}}>
      <p>{ greeting }</p>
    </Container>
  )
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired
}

export default ItemListContainer;