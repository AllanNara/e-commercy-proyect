import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};

export default useCart