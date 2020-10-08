import React from "react";
import { fireEvent, render } from "../../test/reduxRender";
import {
  changeToEUR as mockChangeToEUR,
  changeToUSD as mockChangeToUSD,
} from "../../Redux/actionCurrency";
import CurrencyButtons from "../CurrencyButtons";

jest.mock("../../Redux/actionCurrency");

test("renders CurrencyButtons and changing currency works", () => {
  mockChangeToEUR.mockReturnValue({
    type: "CHANGE_TO_EUR",
  });
  mockChangeToUSD.mockReturnValue({
    type: "CHANGE_TO_USD",
  });
  const { getByText } = render(<CurrencyButtons />);
  const EURbutton = getByText(/.* eur/i);
  const USDbutton = getByText(/.* usd/i);

  fireEvent.click(USDbutton);
  expect(mockChangeToUSD).toHaveBeenCalledTimes(1);
  expect(USDbutton).toHaveClass("active");
  expect(EURbutton).not.toHaveClass("active");

  fireEvent.click(EURbutton);
  expect(mockChangeToEUR).toHaveBeenCalledTimes(1);
  expect(EURbutton).toHaveClass("active");
  expect(USDbutton).not.toHaveClass("active");

  fireEvent.click(USDbutton);
  expect(mockChangeToUSD).toHaveBeenCalledTimes(2);
  expect(USDbutton).toHaveClass("active");

  fireEvent.click(EURbutton);
  expect(mockChangeToEUR).toHaveBeenCalledTimes(2);
  expect(EURbutton).toHaveClass("active");
});
