import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../services";
import CustomContainer from "./components/common/CustomContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Spinner from "./components/common/Spinner";
import useFav from '../hooks/useFav'

export default function ItemDetailContainer() {
	const [data, setData] = useState(null);
	const navigate = useNavigate();
	const { itemId } = useParams();
	const { isInList, addFavorite, removeFavorite } = useFav();

	useEffect(() => {
		window.scrollTo({ top: 100, behavior: 'instant' })
	}, [])

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
		<CustomContainer>
			{data ? <ItemDetail item={data} isFavorite={isInList(data.id)} {...{ addFavorite, removeFavorite }} /> : <Spinner />}
		</CustomContainer>
	);
}
