import { USER_ACTION_TYPES } from "./user.actionTypes";
import { createAction } from "../../utils/createAction";

export const setUser = (user) => createAction(USER_ACTION_TYPES.SET_USER,user);