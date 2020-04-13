import { items } from "../api";

export const GET_ITEMS = "GET_ITEMS";

export function getItems() {
  return function (dispatch) {
    return dispatch({
      type: GET_ITEMS,
      data: items,
    });
  };
}
