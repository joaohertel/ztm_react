import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { customLoggerMiddleware } from "./middleware/customLogger";

const middleWares = [process.env.NODE_ENV != "production" && logger].filter(
  Boolean
);
// const middleWares = [customLoggerMiddleware];

// Tells redux-persis what i wan't to persist
const config = {
  key: "root", // means that i want to persist the whole thing
  blacklist: ["user"], // blacklist, which state slices i want to exclude
  storage,
};

const composeEnhancer =
  (process.env.NODE_ENV != "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistedReducer = persistReducer(config, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

//
export const persistor = persistStore(store);
