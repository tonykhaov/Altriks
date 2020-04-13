import { combineReducers } from "redux";
import items from "./reducerItems";
import cart from "./reducerCart";
import currency from "./reducerCurrency";

const rootReducers = combineReducers({
  items,
  cart,
  currency,
});

export default rootReducers;
