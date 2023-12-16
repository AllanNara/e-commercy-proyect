import { Navigate, Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoutes({ children, user, redirectTo = "/" }) {
	const location = useLocation();

	if (!user) {
		return <Navigate to={redirectTo} state={{ from: location }} />;
	}

	return children ? children : <Outlet />;
}

ProtectedRoutes.propTypes = {
	children: PropTypes.node,
	user: PropTypes.any,
	redirectTo: PropTypes.string,
};

export default ProtectedRoutes;
