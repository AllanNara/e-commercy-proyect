import { Box, Paper } from "@mui/material";
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
			.then((data) => setData(data))
			.catch((err) => {
				if (err.message === "not-exist")
					navigate("/item/404/product-not-found", {
						state: { message: "El producto buscado no existe en nuestro catalogo" },
					});
				console.log("Document search error: ", err.message);
			});
		return () => {
			setData(null);
		};
	}, [itemId, navigate]);

	return (
		<>
			<Paper sx={{ m: 2, mb: -4, p: 0.5, pb: 10 }} variant="outlined">
				<Box
					sx={{
						width: "95%",
						height: "100%",
						margin: "auto",
						marginTop: 1,
					}}
				>
					{data ? <ItemDetail item={data} /> : <Spinner />}
				</Box>
			</Paper>
		</>
	);
}
