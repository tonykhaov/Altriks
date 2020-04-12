import { items } from "../api";

export function getItems() {
  return function (dispatch) {
    return dispatch({
      type: "GET_ITEMS",
      data: items,
    });
  };
}
