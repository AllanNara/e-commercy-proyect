import { Container } from "@mui/material";
import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      try {
        const data = await fetch('https://fakestoreapi.com/products/1')
        const json = await data.json();
        setData(json)  
      } catch (error) {
        console.log("Ocurrio un error\n", error)
      }
    }

    setTimeout(() => fetchData(), 2000);
		return () => {
			setData(null)
		}
  }, [])

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      {data ? <ItemDetail item={data}/> : <p>Esperando producto...</p>}
    </Container>
  )
}
