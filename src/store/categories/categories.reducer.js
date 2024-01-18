import { CATEGORY_ACTION_TYPES } from "./categories.actionTypes";

const CATEGORY_INITIAL_STATE = {
    categories: []
}

export const categoryReducer = (state = CATEGORY_INITIAL_STATE, action = {}) => {

    const { type, payload } = action;

    switch (type){
        case CATEGORY_ACTION_TYPES.SET_CATEGORY:
            return {
                ...state,
                categories: payload
            }
        default:
            return state;
    }
}