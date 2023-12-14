import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";

function Item({ item }) {
	const { id, title, price, thumbnail, status, stock } = item;

	const renderStockMessage = () => {
		if (stock === 1) {
			return (
				<Typography
					sx={stockMessageStyles}
					color={`text.${status ? "primary" : "secondary"}`}
				>
					¡Ultima unidad disponible!
				</Typography>
			);
		} else if (!status) {
			return (
				<Typography
					sx={stockMessageStyles}
					color={`text.${status ? "primary" : "secondary"}`}
				>
					Sin unidades disponibles
				</Typography>
			);
		}
		return null;
	};

	return (
		<Box sx={boxStyles}>
			<Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
				<Card sx={cardStyles}>
					<Box sx={thumbnailContainerStyles}>
						<Typography
							sx={{ ...priceStyles, bgcolor: status ? "#fff" : "#f6f6f6" }}
							color={`text.${status ? "primary" : "secondary"}`}
						>
							$ {price}
						</Typography>
						{renderStockMessage()}
						<CardMedia
							component="img"
							height="230"
							image={thumbnail}
							sx={status ? { ":hover": { opacity: 0.3 } } : { opacity: 0.3 }}
						/>
					</Box>
					<CardContent sx={contentStyles}>
						<Divider />
						<Box sx={titleContainerStyles}>
							<Typography variant="body1" color="text.secondary" fontSize={17}>
								{title}
							</Typography>
						</Box>
					</CardContent>
				</Card>
			</Link>
		</Box>
	);
}

const boxStyles = {
	borderRadius: 1,
	flexBasis: "25%",
	position: "relative",
	mx: 2.5,
	mb: 2,
};

const cardStyles = {
	maxWidth: 500,
	minWidth: 300,
	width: "auto",
	height: 400,
	maxHeight: 345,
};

const thumbnailContainerStyles = {
	bgcolor: "#eee",
	position: "relative",
};

const priceStyles = {
	position: "absolute",
	margin: 0.5,
	fontWeight: 500,
	fontSize: 18,
	p: 1,
	borderRadius: 2,
	border: 1,
	borderColor: "#aaa",
	zIndex: 1,
};

const stockMessageStyles = {
	position: "absolute",
	margin: 0.5,
	bottom: 0,
	right: 0,
	fontWeight: 500,
	fontSize: 18,
	p: 1,
	borderRadius: 2,
	bgcolor: "#fff",
	border: 1,
	borderColor: "#aaa",
	zIndex: 1,
};

const contentStyles = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	height: "38%",
};

const titleContainerStyles = {
	display: "flex",
	justifyContent: "center",
	height: "100%",
	alignItems: "center",
};

Item.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Item;
