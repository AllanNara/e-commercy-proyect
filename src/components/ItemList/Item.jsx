import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Divider,
	Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Item({ item }) {
	const { id, title, price, thumbnail } = item;

  // :: TODO: Cambiar los titulos desde la base de datos
	const titleParse = title.split(" ").slice(0, 5).join(" ");

	return (
		<Box sx={{ borderRadius: 1 }}>
			<Link to={`/item/${id}`}>
				<Card sx={{ maxWidth: 345, width: 345, height: 290, maxHeight: 345 }}>
					<Typography
						sx={{
							position: "absolute",
							margin: 0.5,
							fontWeight: 500,
							p: 1,
							borderRadius: 2,
							bgcolor: "#fff",
							border: 1,
							borderColor: "#aaa",
						}}
					>
						$ {price}
					</Typography>
					<Box sx={{ bgcolor: "#eee" }}>
						<CardMedia
							component="img"
							height="194"
							image={thumbnail}
							sx={{ ":hover": { opacity: 0.3 }  }}
						/>
					</Box>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "45%",
						}}
					>
						<Divider />
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ textAlign: "center" }}
						>
							{titleParse}
						</Typography>
						<Button></Button>
					</CardContent>
				</Card>
			</Link>
		</Box>
	);
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Item;
