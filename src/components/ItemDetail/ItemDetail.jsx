import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
	Box,
	Breadcrumbs,
	Divider,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import useCart from "../../hooks/useCart";

function ItemDetail({ item }) {
	const {
		title,
		price,
		stock,
		status,
		description,
		category,
		thumbnail,
		id,
		code,
		categoryKey,
	} = item;
	const [quantity, setQuantity] = useState();
	const { addToCart, setRefresh } = useCart();

	const handleOnAdd = () => {
		if (!quantity) return;
		const item = {
			title,
			price,
			thumbnail,
			id,
		};
		addToCart(item, quantity);
		setRefresh(true);
	};

	return (
		<>
			<Breadcrumbs sx={{ fontSize: 20, marginBottom: 1 }}>
				<Link to={"/"}>
					<IconButton disableRipple edge="end" size="small" sx={{ gap: 0.3 }}>
						<HomeIcon fontSize="medium" />
						<Typography
							color="text.secondary"
							sx={{ ":hover": { textDecoration: "underline" } }}
						>
							Home
						</Typography>
					</IconButton>
				</Link>
				<Link to={`/categories/${categoryKey}`}>
					<Typography
						color="text.primary"
						sx={{ ":hover": { textDecoration: "underline" } }}
					>
						{category}
					</Typography>
				</Link>
			</Breadcrumbs>

			<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
				<Paper
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexBasis: "45%",
					}}
				>
					<img src={thumbnail} alt={title} style={{ height: "auto", width: "80%" }} />
				</Paper>

				<Paper
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "center",
						flexBasis: "45%",
						gap: 1,
						p: 2,
						bgcolor: "#f8f8f8",
					}}
				>
					<Typography variant="h2" fontSize={40}>
						{title}
					</Typography>
					<Typography variant="overline">Item No. {code}</Typography>

					<Typography variant="h4" fontWeight={500} marginBottom={1.5}>
						${price}
					</Typography>
					<ItemCount
						initial={status ? 1 : 0}
						stock={stock}
						onAdd={handleOnAdd}
						changeQuantity={setQuantity}
						quantity={quantity}
					/>

					<Divider sx={{ color: "red", alignSelf: "stretch", margin: 2 }} />
					<Typography variant="h6" fontFamily={"Poppins"} fontWeight={600}>
						Descripción:{" "}
					</Typography>
					<Typography variant="body1" fontFamily={"Poppins"} fontWeight={200}>
						{description}
					</Typography>
				</Paper>
			</Box>
		</>
	);
}

ItemDetail.propTypes = {
	item: PropTypes.object.isRequired,
};

export default ItemDetail;
