import { CHANGE_TO_USD, CHANGE_TO_EUR } from "./actionCurrency";

const initialState = {
  currency: "EUR",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TO_EUR:
      return { ...state, currency: "EUR" };
    case CHANGE_TO_USD:
      return { ...state, currency: "USD" };
    default:
      return state;
  }
}
