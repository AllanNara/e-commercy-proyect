import { PropTypes } from "prop-types"
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting = "" }) {
  const [data, setData] = useState(null)
  const { categoryid } = useParams();


  useEffect(() => {
    const fetchData = async() => {
      try {
        let data;
        if(categoryid) data = await fetch(`https://fakestoreapi.com/products/category/${categoryid}`);
        else data = await fetch(`https://fakestoreapi.com/products`);
        const json = await data.json();
        setData(json)  
      } catch (error) {
        console.log("Ocurrio un error\n", error)
      }
    }

    fetchData()
    // setTimeout(() => fetchData(), 2000)
    return () => {
      setData(null)
    }
  }, [categoryid])

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      <p style={{alignSelf: "center"}}>{ greeting }</p> 
      {data ? <ItemList items={data}/> : <p>Esperando contenido...</p>}
    </Container>
  )
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string
}

export default ItemListContainer;