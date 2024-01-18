import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { categoryReducer } from './categories/categories.reducer';
import { cartReducer } from './cart/cart.reducer';


export const rootReducer = combineReducers({
    user:userReducer,
    categoryState: categoryReducer,
    cartStateSlice: cartReducer
});