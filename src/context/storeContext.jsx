import { createContext } from "react";
import PropTypes from 'prop-types'
import { Category, Order, Product } from "../services"

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  
  return (
    <StoreContext.Provider value={{ Category, Product, Order }}>
      {children}
    </StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node
}