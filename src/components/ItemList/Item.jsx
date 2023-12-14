import { Card, CardContent, CardMedia, Typography, Divider, Box } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Item({ item }) {
	const { id, title, price, thumbnail, status, stock } = item;
	if((stock && !status) || (!stock && status))
		console.log(`Please check item nro. ${id} stock and status do not match`)

	return (
		<Box
			sx={{
				borderRadius: 1,
				flexBasis: "20%",
				position: "relative",
				mx: 2.5,
				mb: 2,
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
					<Box sx={{ bgcolor: "#eee" }}>

					<Typography
						sx={{
							position: "absolute",
							margin: 0.5,
							fontWeight: 500,
							fontSize: 18,
							p: 1,
							borderRadius: 2,
							bgcolor: status ? "#fff" : "#f6f6f6",
							border: 1,
							borderColor: "#aaa",
							zIndex: 1,
						}}
						color={`text.${status ? "primary" : "secondary"}`}
					>
						$ {price}
					</Typography>
					{ stock === 1 ? 
						<Typography
							sx={{
								position: "absolute",
								margin: 0.5,
								bottom: "35%",
								right: 0,
								fontWeight: 500,
								fontSize: 18,
								p: 1,
								borderRadius: 2,
								bgcolor: "#fff",
								border: 1,
								borderColor: "#aaa",
								zIndex: 1,
							}}
							color={`text.${status ? "primary" : "secondary"}`}
						>
							¡Ultima unidad disponible!
						</Typography> : !status ?
												<Typography
												sx={{
													position: "absolute",
													bottom: "35%",
													right: 0,
													margin: 0.5,
													fontWeight: 200,
													fontSize: 14,
													p: .8,
													bgcolor: "#f7f7f7",
													border: 1,
													borderColor: "#aaa",
													zIndex: 1,
												}}
												color={`text.${status ? "primary" : "secondary"}`}
											>
												Sin unidades disponibles
											</Typography> : ""
					}
						<CardMedia
							component="img"
							height="230"
							image={thumbnail}
							sx={status ? { ":hover": { opacity: 0.3 } } : { opacity: 0.3 } }
						/>
					</Box>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "38%",
						}}
					>
						<Divider />
						<Box
							component={"div"}
							sx={{
								display: "flex",
								justifyContent: "center",
								height: "100%",
								alignItems: "center",
							}}
						>
							<Typography
								variant="body1"
								color="text.secondary"
								fontSize={17}
								sx={{ textAlign: "center" }}
							>
								{title}
							</Typography>
						</Box>
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
