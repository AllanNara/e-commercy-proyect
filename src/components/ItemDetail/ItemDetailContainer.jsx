import { Container } from "@mui/material";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../common/Spinner";
import { Product } from "../../services";

export default function ItemDetailContainer() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { itemId } = useParams();

  useEffect(() => {
    Product.read(itemId)
      .then(data => setData(data))
      .catch(err => {
        if(err.message === "not-exist") navigate("/404/product-not-found")
        console.log("Fatal error: ", err)
      })
    return () => {
			setData(null)
		}
  }, [itemId, navigate])

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      {data ? <ItemDetail item={data}/> : <Spinner />}
    </Container>
  )
}
