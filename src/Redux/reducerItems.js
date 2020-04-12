const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, items: action.data };
    default:
      return state;
  }
}
