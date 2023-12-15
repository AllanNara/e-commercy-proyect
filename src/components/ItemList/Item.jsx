import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/FavoriteSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderSharp";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Divider,
	IconButton,
	ThemeProvider,
	Typography,
} from "@mui/material";

function Item({ item, isFavorite, addFavorite, removeFavorite }) {
	const { id, title, price, thumbnail, status, stock } = item;

	const renderStockMessage = () => {
		if (stock === 1) {
			return (
				<StyledStockMessage color={`text.${status ? "primary" : "secondary"}`}>
					¡Ultima unidad disponible!
				</StyledStockMessage>
			);
		} else if (!status) {
			return (
				<StyledStockMessage color={`text.${status ? "primary" : "secondary"}`}>
					Sin unidades disponibles
				</StyledStockMessage>
			);
		}
		return null;
	};

	return (
		<ThemeProvider theme={itemListTheme}>
			<StyledBox>
				<StyledCard>
					<StyledThumbnailContainer>
						<StyledPrice
							status={`${status}`}
							color={`text.${status ? "primary" : "secondary"}`}
						>
							$ {price}
						</StyledPrice>
						{renderStockMessage()}
						<IconButton
							onClick={() => isFavorite ? removeFavorite(id) : addFavorite(id)}
							sx={{
								position: "absolute",
								right: 0,
								margin: 0.5,
								zIndex: 10,
							}}
							size="small"
						>
							{isFavorite ? (
								<FavoriteIcon fontSize="large" />
							) : (
								<FavoriteBorderIcon fontSize="large" />
							)}
						</IconButton>
						<Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
							<StyledCardMedia
								component="img"
								height="230"
								image={thumbnail}
								status={`${status}`}
							/>
						</Link>
					</StyledThumbnailContainer>
					<Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
						<StyledCardContent>
							<Divider />
							<StyledTitleContainer>
								<Typography variant="body1" color="text.secondary" fontSize={17}>
									{title}
								</Typography>
							</StyledTitleContainer>
						</StyledCardContent>
					</Link>
				</StyledCard>
			</StyledBox>
		</ThemeProvider>
	);
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
	isFavorite: PropTypes.bool,
	addFavorite: PropTypes.func,
	removeFavorite: PropTypes.func,
};

export default Item;

const itemListTheme = createTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: green[500],
		},
		text: {
			primary: "#333",
			secondary: "#555",
		},
		background: {
			paper: "#fff",
			default: "#eee",
		},
		grey: {
			700: "#aaa",
		},
	},
	typography: {
		pxToRem: (value) => `${value / 16}rem`,
	},
	spacing: (value) => `${value * 8}px`,
});

const StyledBox = styled(Box)(({ theme }) => ({
	borderRadius: theme.spacing(1),
	flexBasis: "25%",
	position: "relative",
	mx: theme.spacing(2.5),
	mb: theme.spacing(2),
}));

const StyledCard = styled(Card)(() => ({
	maxWidth: 500,
	minWidth: 300,
	width: "auto",
	height: 330,
	maxHeight: 345,
}));

const StyledThumbnailContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	position: "relative",
}));

const StyledPrice = styled(Typography)(({ theme, status }) => ({
	position: "absolute",
	margin: theme.spacing(0.5),
	fontWeight: 500,
	fontSize: theme.typography.pxToRem(18),
	padding: theme.spacing(1),
	borderRadius: theme.spacing(2),
	border: `1px solid ${theme.palette.grey[700]}`,
	zIndex: 1,
	userSelect: "none",
	backgroundColor: status === "true" ? theme.palette.background.paper : "#f6f6f6",
}));

const StyledStockMessage = styled(Typography)(({ theme }) => ({
	position: "absolute",
	margin: theme.spacing(0.5),
	bottom: 0,
	right: 0,
	fontWeight: 500,
	fontSize: theme.typography.pxToRem(18),
	padding: theme.spacing(1),
	borderRadius: theme.spacing(2),
	backgroundColor: theme.palette.background.paper,
	border: `1px solid ${theme.palette.grey[700]}`,
	zIndex: 1,
}));

const StyledCardMedia = styled(CardMedia)(({ status }) => {
	if (status === "true") {
		return { ":hover": { opacity: 0.3 } };
	} else return { ":hover": { opacity: 0.3 }, opacity: 0.6 };
});

const StyledCardContent = styled(CardContent)(() => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	height: "38%",
}));

const StyledTitleContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	height: "100%",
	alignItems: "center",
}));
