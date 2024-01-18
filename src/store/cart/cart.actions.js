import { createAction } from "../../utils/createAction";
import { CART_ACTION_TYPES } from "./cart.actionTypes";

export const setDropDownOpen = (dropDownOpenValue) =>
  createAction(CART_ACTION_TYPES.SET_DROPDOWN_OPEN, dropDownOpenValue);

export const setCartItems = (cartItems) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cartItems);

// /* legacy */
// export const setCartQuantityCount = createAction();

// /* legacy */
// export const setCartTotal = createAction();

/* ACTIONS */
export const addCartItem = (cartItems, productToAdd) => {
  const newCartItems = addOrIncreaseItemCount(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreaseCartItemCount = (cartItems, productToDecrease) => {
  const newCartItems = decreaseOrRemoveItemCount(cartItems, productToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItem = (cartItems, productToRemove)=>{
  const newCartItems = removeProduct(cartItems,productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};


/* Aux Functions */
/* Aux Function */
const addOrIncreaseItemCount = (currentCartItems, productToAdd) => {
  const { id } = productToAdd;
  // check if product exists
  let addedCartItem = currentCartItems.find((item) => {
    return item.id === id
  });

  
  let updatedCartItems = [...currentCartItems];
  
  // if does not exists, create one
  if (!addedCartItem) {
    addedCartItem = { ...productToAdd, quantity: 1 };
    updatedCartItems.push(addedCartItem);
  } else {
    // if exists add quantity
    updatedCartItems = currentCartItems.map((item) => {
      if (item.id === id) item.quantity += 1;
      return item;
    });
  }

  return updatedCartItems;
};

/* Aux Function */
const decreaseOrRemoveItemCount = (currentCartItems, productToDecrease) => {
  const { id } = productToDecrease;

  // check if product exists
  let decreasedCartItem = currentCartItems.find((item) => item.id === id);

  let updatedCartItems = [...currentCartItems];

  // if does not exists, create one
  if (decreasedCartItem) {
    if (decreasedCartItem.quantity > 1) {
      updatedCartItems = currentCartItems.map((item) => {
        if (item.id === id) item.quantity -= 1;
        return item;
      });
    }
    // not permitted to have less than 1 of item quantity
    // if user wants to remove item should use de X button
  }
  return updatedCartItems;
};

// /* Aux Function */
// const auxSetCartItems = (cartItems) => {
//   const payload = calculatePayload(cartItems);
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
// };

/* Aux Function */
// const calculatePayload = (cartItems) => {
//   const count = cartItems.reduce((total, item) => {
//     return (total += item.quantity);
//   }, 0);
//   const cartTotal = calculateCartTotal(cartItems);

//   return {
//     cartQuantityCount: count,
//     cartTotal: cartTotal,
//     cartItems: cartItems,
//   };
// };

// /* Aux Function */
// const calculateCartTotal = (cartItems) => {
//   const total = cartItems.reduce((total, item) => {
//     return total + item.price * item.quantity;
//   }, 0);

//   return total;
// };
/* Aux Function */
const removeProduct = (currentCartItems, productToRemove) => {
  const { id } = productToRemove;

  // check if product exists
  let itemCartToRemove = currentCartItems.find((item) => item.id === id);

  let updatedCartItems = [...currentCartItems];

  if (itemCartToRemove) {
    updatedCartItems = currentCartItems.filter((item) => item.id !== id);
  }

  return updatedCartItems;
};
