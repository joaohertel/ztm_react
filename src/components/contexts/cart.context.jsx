import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
  dropDownOpen: false,
  setDropDownOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  addCartItem: () => null,
});

const updateCartItemList = (currentCartItems, productToAdd) => {
  const { id } = productToAdd;

  // check if product exists
  let addedCartItem = currentCartItems.find((item) => item.id == id);

  let updatedCartItems = [...currentCartItems];

  // if does not exists, create one
  if (!addedCartItem) {
    addedCartItem = { ...productToAdd, quantity: 1 };
    updatedCartItems.push(addedCartItem);
  } else {
    // if exists add quantity
    updatedCartItems = currentCartItems.map((item) => {
      if (item.id == id) item.quantity += 1;
      return item;
    });
  }

  return updatedCartItems;
};

export const CartProvider = ({ children }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (productToAdd) => {
    // add/update cartItem in the itemsState
    setCartItems(updateCartItemList(cartItems, productToAdd));
  };

  const cartState = {
    dropDownOpen,
    setDropDownOpen,
    cartItems,
    setCartItems,
    addCartItem,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};
