import { Container } from "@mui/material";
import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function ItemDetailContainer() {
  const [data, setData] = useState(null)
  const { itemid } = useParams();

  useEffect(() => {
    const fetchData = async() => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${itemid}`)
        const json = await data.json();
        setData(json)  
      } catch (error) {
        console.log("Ocurrio un error\n", error)
      }
    }

    fetchData();
    // setTimeout(() => fetchData(), 2000);
		return () => {
			setData(null)
		}
  }, [itemid])

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      {data ? <ItemDetail item={data}/> : <Spinner />}
    </Container>
  )
}
