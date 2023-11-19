import { PropTypes } from "prop-types"
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import ItemList from "../components/ItemList";

function ItemListContainer({ greeting }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      try {
        const data = await fetch('https://fakestoreapi.com/products')
        const json = await data.json();
        console.log(json)
        setData(json)  
      } catch (error) {
        console.log("Ocurrio un error\n", error)
      }
    }

    setTimeout(() => fetchData(), 2000)
  }, [])

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      <p style={{alignSelf: "center"}}>{ greeting }</p> 
      {data ? <ItemList items={data}/> : <p>Esperando contenido...</p>}
    </Container>
  )
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired
}

export default ItemListContainer;