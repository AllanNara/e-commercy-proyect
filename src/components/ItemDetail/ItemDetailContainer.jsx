import { Container } from "@mui/material";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../common/Spinner";
import { Product } from "../../services";

export default function ItemDetailContainer() {
  const [data, setData] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    Product.read(itemId)
      .then(data => setData(data))
      .catch(err => console.log("Fatal error: ", err))
    return () => {
			setData(null)
		}
  }, [itemId])

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      {data ? <ItemDetail item={data}/> : <Spinner />}
    </Container>
  )
}
