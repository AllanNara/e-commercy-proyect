import { Box, Paper } from "@mui/material";
import PropTypes from "prop-types";

function CustomContainer({ children, BreadComponent, bgc, customS }) {
	const stylesPaper = { m: 2, mb: -4, p: 0.5, pb: 10 }
	if(bgc) stylesPaper.bgcolor = bgc;

	const stylesBox = {
		width: "95%",
		height: "100%",
		margin: "auto",
		marginTop: 1,
		...customS
	}
	
	return (
		<Paper sx={stylesPaper} variant="outlined">
			<Box sx={stylesBox} >
        {BreadComponent && <BreadComponent />}
				{children}
			</Box>
		</Paper>
	);
}

CustomContainer.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string,
	linkTo: PropTypes.string,
	bgc: PropTypes.string,
	customS: PropTypes.object,
	BreadComponent: PropTypes.func,
};

export default CustomContainer;
