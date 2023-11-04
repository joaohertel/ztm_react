import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext({
  dropDownOpen: false,
  setDropDownOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  addCartItem: (productToAdd) => null,
  cartQuantityCount: 0,
  decreaseCartItemCount: (productToDecrease) => null,
  removeCartItem: (productToRemove) => null,
  cartTotal: 0,
});

/* Aux Function */
const addOrIncreaseItemCount = (currentCartItems, productToAdd) => {
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

/* Aux Function */
const decreaseOrRemoveItemCount = (currentCartItems, productToDecrease) => {
  const { id } = productToDecrease;

  // check if product exists
  let decreasedCartItem = currentCartItems.find((item) => item.id == id);

  let updatedCartItems = [...currentCartItems];

  // if does not exists, create one
  if (decreasedCartItem) {
    if (decreasedCartItem.quantity > 1) {
      updatedCartItems = currentCartItems.map((item) => {
        if (item.id == id) item.quantity -= 1;
        return item;
      });
    }
    // not permitted to have less than 1 of item quantity
    // if user wants to remove item should use de X button
  }
  return updatedCartItems;
};
/* Aux Function */
const calculateCartTotal = (cartItems) => {
  const total = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return total;
};
/* Aux Function */
const removeProduct = (currentCartItems, productToRemove) => {
  const { id } = productToRemove;

  // check if product exists
  let itemCartToRemove = currentCartItems.find((item) => item.id == id);

  let updatedCartItems = [...currentCartItems];

  if (itemCartToRemove) {
    updatedCartItems = currentCartItems.filter((item) => item.id !== id);
  }

  return updatedCartItems;
};

/* THE COMPONENT */
export const CartProvider = ({ children }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantityCount, setCartQuantityCount] = useState(0);
  const [cartTotal, setCarttotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);
    setCartQuantityCount(count);
  }, [cartItems]);

  useEffect(() => {
    const cartTotal = calculateCartTotal(cartItems);

    setCarttotal(cartTotal);
  }, [cartItems]);

  const addCartItem = (productToAdd) => {
    // add/update cartItem in the itemsState
    setCartItems(addOrIncreaseItemCount(cartItems, productToAdd));
  };

  const decreaseCartItemCount = (productToDecrease) => {
    setCartItems(decreaseOrRemoveItemCount(cartItems, productToDecrease));
  };

  const removeCartItem = (productToRemove) => {
    setCartItems(removeProduct(cartItems, productToRemove));
  };

  const cartState = {
    dropDownOpen,
    setDropDownOpen,
    cartItems,
    setCartItems,
    addCartItem,
    cartQuantityCount,
    decreaseCartItemCount,
    removeCartItem,
    cartTotal,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};
