import { CART_ACTION_TYPES } from "./cart.actionTypes";



const CART_INITIAL_STATE = {
    dropDownOpen: false,
    cartItems: []
  };

  
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    
    switch (action.type) {
      case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
          ...state,
          cartItems: [...action.payload],
          // cartItems: action.payload,
        };
      case CART_ACTION_TYPES.SET_DROPDOWN_OPEN:
        return {
          ...state,
          dropDownOpen: action.payload,
        };
    //   case CART_ACTION_TYPES.SET_CART_QUANTITY_COUNT:
    //     return {
    //       ...state,
    //       cartQuantityCount: action.payload,
    //     };
    //   case CART_ACTION_TYPES.SET_CART_TOTAL:
    //     return {
    //       ...state,
    //       cartTotal: action.payload,
    //     };
      case CART_ACTION_TYPES.ADD_CART_ITEM:
        return {
          ...state,
          cartItems: [...state.cartItems,action,action.payload]
        };
      default:
        return state;
    }
  };
  