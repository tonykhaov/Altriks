export default function addToCart(index, payload) {
  return {
    type: "ADD_TO_CART",
    id: index,
    payload,
  };
}
