import PersonIcon from "@mui/icons-material/Person";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import PropTypes from "prop-types";

function AccountWidget({ user, logout }) {
	return (
		<>
			<Tooltip title="Ingresar al sistema">
				<IconButton size="medium" sx={{ borderRadius: 10 }} onClick={user ? logout : null}>
					{!user ? (
						<>
							<PersonIcon
								sx={{
									":hover": { color: "chocolate" },
									width: 35,
									height: 35,
									color: "#434343",
								}}
							/>
								<Typography variant="caption">Ingresar</Typography>
						</>
					) : (
						<>
							<LogoutIcon
								sx={{
									":hover": { color: "chocolate" },
									width: 35,
									height: 35,
									color: "#434343",
								}}
							/>
								<Typography variant="caption" sx={{marginLeft: 0.4}}>Cerrar sesion</Typography>
						</>
					)}
				</IconButton>
			</Tooltip>
		</>
	);
}

AccountWidget.propTypes = {
	user: PropTypes.any,
	logout: PropTypes.func.isRequired
};

export default AccountWidget;
