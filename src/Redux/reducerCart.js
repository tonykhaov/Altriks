import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./actionCart";

const initialState = {
  cart: {},
};

export default function (state = initialState, action) {
  const { type, id } = action;
  const newState = { ...state, cart: { ...state.cart } };
  switch (type) {
    case ADD_TO_CART:
      newState.cart[id] = newState.cart[id] + 1 || 1;
      return newState;
    case REMOVE_FROM_CART:
      delete newState.cart[id];
      return newState;
    case EMPTY_CART:
      newState.cart = {};
      return newState;
    default:
      return state;
  }
}
