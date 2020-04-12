import { combineReducers } from "redux";
import items from "./reducerItems";
import cart from "./reducerCart";

const rootReducers = combineReducers({
  items,
  cart,
});

export default rootReducers;
