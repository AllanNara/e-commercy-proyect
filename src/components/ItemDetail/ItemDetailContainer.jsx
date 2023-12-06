import { Container } from "@mui/material";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../common/Spinner";
import useStore from "../../hooks/useStore";

export default function ItemDetailContainer() {
  const [data, setData] = useState(null);
  const { Product } = useStore()
  const { itemId } = useParams();

  useEffect(() => {
    Product.read(itemId)
      .then(data => setData(data))
      .catch(err => console.log("Fatal error: ", err))
    return () => {
			setData(null)
		}
  }, [itemId, Product])

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      {data ? <ItemDetail item={data}/> : <Spinner />}
    </Container>
  )
}
