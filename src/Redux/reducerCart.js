const initialState = {
  cart: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return state;
    default:
      return state;
  }
}
