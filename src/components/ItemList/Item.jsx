import {
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

	return (
		<Box
			sx={{
				borderRadius: 1,
				flexBasis: "20%",
				mx: 2.5,
				mb: 2
			}}
		>
			<Link to={`/item/${id}`}>
				<Card
					sx={{
						maxWidth: 500,
						minWidth: 300,
						width: "auto",
						height: 400,
						maxHeight: 345,
					}}
				>
					<Typography
						sx={{
							position: "absolute",
							margin: 0.5,
							fontWeight: 500,
							fontSize: 18,
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
							height="230"
							image={thumbnail}
							sx={{ ":hover": { opacity: 0.3 } }}
						/>
					</Box>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "28%",
						}}
					>
						<Divider />
						<Typography
							variant="body1"
							color="text.secondary"
							fontSize={17}
							sx={{ textAlign: "center" }}
						>
							{title}
						</Typography>
						{/* <Button></Button> */}
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
