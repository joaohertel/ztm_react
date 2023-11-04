import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
  dropDownOpen:false,
  cartItems: [],
  setDropDownOpen: () => null,
  setCartItems: () => null
});

export const CartProvider = ({ children }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const cartState = {
    dropDownOpen,
    setDropDownOpen,
    cartItems,
    setCartItems
  }


  return <CartContext.Provider value={cartState}>
    { children }
  </CartContext.Provider>
}