import { createAction } from "../../utils/createAction";
import { CATEGORY_ACTION_TYPES } from "./categories.actionTypes";

export const setCategories = (categories) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY, categories);
