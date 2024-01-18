import { USER_ACTION_TYPES } from "./user.actionTypes";

const INITIAL_USER_STATE = {
  user: null,
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
