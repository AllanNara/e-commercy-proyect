import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Product } from "../services";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
	const [productList, setProductList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);

	const updateProductList = useCallback((data) => {
		setProductList(data);
	}, []);


	useEffect(() => {
		async function fetchListProducts() {
			try {
				setLoading(true);
				const result = await Product.readAll();
				updateProductList(result);
			} catch (error) {
				console.error("Fatal error: ", error);
			} finally {
				setLoading(false);
			}
		}

		if(!productList.length || (productList && refresh)) fetchListProducts()
		refresh && setRefresh(false)
	}, [updateProductList, productList, refresh])


	return (
		<StoreContext.Provider
			value={{
				setRefresh,
				productList,
				loading
			}}
		>
			{children}
		</StoreContext.Provider>
	);
};

StoreProvider.propTypes = {
	children: PropTypes.node,
};
