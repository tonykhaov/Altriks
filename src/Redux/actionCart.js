export default function updateCart(index, payload) {
  return {
    type: "ADD_TO_CART",
    id: index,
    payload,
  };
}
