import { createSelector } from "reselect";

// export const selectCartItems = (state) => state.cartStateSlice.cartItems;
export const cartStateSliceSelector = (state) => state.cartStateSlice;

export const selectCartItems = createSelector(
  [cartStateSliceSelector],
  (cartStateSliceSelector) => cartStateSliceSelector.cartItems
);

export const selectCartData = createSelector(
  [cartStateSliceSelector],
  (cartStateSlice) => {
    return {
      ...cartStateSlice,
      ...calculatePayload(cartStateSlice.cartItems),
    };
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => calculateCartTotal(cartItems)
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);
  }
);

export const selectCartIsOpen = createSelector(
  [cartStateSliceSelector],
  (cartStateSlice) => cartStateSlice.dropDownOpen
);

/* Aux Function */
const calculatePayload = (cartItems) => {
  const count = cartItems.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);
  const cartTotal = calculateCartTotal(cartItems);

  return {
    cartQuantityCount: count,
    cartTotal: cartTotal,
    cartItems: cartItems,
  };
};

/* Aux Function */
const calculateCartTotal = (cartItems) => {
  const total = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return total;
};
