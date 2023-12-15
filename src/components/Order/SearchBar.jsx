import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

function SearchBar({ onSubmit }) {
	
	const handleKeydown = ({ key, target }) => {
		const { value } = target;
		if (key === "Enter" && value.trim().length) {
			onSubmit(value.trim());
			target.value = "";
		}
	};

	return (
		<BoxContainer>
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					onKeyDown={handleKeydown}
					placeholder="Buscar orden..."
					inputProps={{ "aria-label": "search" }}
				/>
			</Search>
			<Typography variant="h6" fontFamily={"Poppins"}>
				¡Busca tu orden por su codigo de identificación!
			</Typography>
		</BoxContainer>
	);
}

SearchBar.propTypes = {
	onSubmit: PropTypes.func,
};

export default SearchBar;

const BoxContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	alignItems: "flex-start",
	padding: theme.spacing(3),
	gap: theme.spacing(3),
	paddingRight: theme.spacing(10),
	borderBottomStyle: "solid",
	borderBottomWidth: 1,
	borderBottomColor: theme.palette.grey[500],
}));

const Search = styled(Box)(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.3),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 1),
	},
	border: "1px solid #aaa",
	width: "38%",
	minWidth: theme.spacing(20),
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	display: "flex",
	alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	padding: theme.spacing(0.5, 0.5, 0.5, 0),
	paddingLeft: `calc(1em + ${theme.spacing(4)})`
}));
