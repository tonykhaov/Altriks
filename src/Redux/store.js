import { applyMiddleware, combineReducers, createStore } from "redux";
import items from "./reducerItems";
import cart from "./reducerCart";
import currency from "./reducerCurrency";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { load, save } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducers = combineReducers({
  items,
  cart,
  currency,
});

const middleware = [thunk, logger];

export const storeForProd = createStore(
  rootReducers,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

export const storeForTest = createStore(
  rootReducers,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);
