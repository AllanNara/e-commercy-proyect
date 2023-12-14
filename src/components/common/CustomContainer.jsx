import { Box, Paper } from "@mui/material";
import PropTypes from "prop-types";

function CustomContainer({ children, BreadComponent }) {
	return (
		<Paper sx={{ m: 2, mb: -4, p: 0.5, pb: 10 }} variant="outlined">
			<Box
				sx={{
					width: "95%",
					height: "100%",
					margin: "auto",
					marginTop: 1,
				}}
			>
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
	BreadComponent: PropTypes.func,
};

export default CustomContainer;
