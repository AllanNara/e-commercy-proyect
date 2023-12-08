import { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
	const [productList, setProductList] = useState([]);

	const updateProductList = useCallback((data) => {
		setProductList(data)
	}, []);


	return (
		<StoreContext.Provider value={{ productList, updateProductList }} >
			{children}
		</StoreContext.Provider>
	);
};

StoreProvider.propTypes = {
	children: PropTypes.node,
};
