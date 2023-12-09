import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes({ children, user, redirectTo = "/" }) {
	if (user) {
		return <Navigate to={redirectTo} replace />;
	}

	return children ? children : <Outlet />;
}

PublicRoutes.propTypes = {
	children: PropTypes.node,
	user: PropTypes.any,
	redirectTo: PropTypes.string,
};

export default PublicRoutes;
