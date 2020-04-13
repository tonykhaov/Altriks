export const CHANGE_TO_EUR = "CHANGE_TO_EUR";
export const CHANGE_TO_USD = "CHANGE_TO_USD";

export function changeToEUR() {
  return {
    type: "CHANGE_TO_EUR",
  };
}
export function changeToUSD() {
  return {
    type: "CHANGE_TO_USD",
  };
}
