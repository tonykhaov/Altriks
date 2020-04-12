export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCart(index) {
  return {
    type: ADD_TO_CART,
    id: index,
  };
}

export function removeFromCart(index) {
  return {
    type: REMOVE_FROM_CART,
    id: index,
  };
}
