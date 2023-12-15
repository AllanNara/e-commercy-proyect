import { Breadcrumbs, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function CustomBreadcrums({ label, linkTo = "#", label2, linkTo2 = "#" }) {
	return (
		<Breadcrumbs sx={{ fontSize: 20, marginBottom: 1, marginLeft: 3 }}>
			<Link to={"/"}>
				<IconButton disableRipple edge="end" size="small" sx={{ gap: 0.3 }}>
					<HomeIcon fontSize="medium" sx={{ mr: 0.5 }} />
					<Typography
						color="text.secondary"
						sx={{ ":hover": { textDecoration: "underline" } }}
					>
						Home
					</Typography>
				</IconButton>
			</Link>
			<Link to={linkTo}>
				<Typography
					color={!label2 ? "text.primary" : "text.secondary"}
					sx={{ ":hover": { textDecoration: "underline" } }}
				>
					{label}
				</Typography>
			</Link>
			{label2 && (
				<Link to={linkTo2}>
					<Typography
						color="text.primary"
						sx={{ ":hover": { textDecoration: "underline" } }}
					>
						{label2}
					</Typography>
				</Link>
			)}
		</Breadcrumbs>
	);
}
CustomBreadcrums.propTypes = {
	label: PropTypes.string,
	linkTo: PropTypes.string,
	label2: PropTypes.string,
	linkTo2: PropTypes.string,
};

export default CustomBreadcrums;
