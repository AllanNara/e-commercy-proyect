import { createContext } from "react";
import PropTypes from 'prop-types'
import { Category, Order, Product } from "../services"

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  
  return (
    <FirebaseContext.Provider value={{ Category, Product, Order }}>
      {children}
    </FirebaseContext.Provider>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node
}