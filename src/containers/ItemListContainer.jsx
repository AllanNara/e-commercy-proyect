import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Spinner from "../components/Spinner";

function ItemListContainer({ greeting = "" }) {
	const [data, setData] = useState(null);
	const { categoryid } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				let data;
				if (categoryid)
					data = await fetch(`https://fakestoreapi.com/products/category/${categoryid}`);
				else data = await fetch(`https://fakestoreapi.com/products`);
				const json = await data.json();
				const convert = json.map((item) => {
					const thumbnail = item.image;
					delete item.image
					return { ...item, thumbnail }
				})
				setData(convert);
			} catch (error) {
				console.log("Ocurrio un error\n", error);
			}
		};

		fetchData();
		// setTimeout(() => fetchData(), 2000)
		return () => {
			setData(null);
		};
	}, [categoryid]);

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					alignSelf: "stretch",
					justifyContent: "center",
					textAlign: "center",
					padding: 3,
				}}
			>
				{greeting}
			</Typography>
			{data ? <ItemList items={data} /> : <Spinner />}
		</Container>
	);
}

ItemListContainer.propTypes = {
	greeting: PropTypes.string,
};

export default ItemListContainer;
