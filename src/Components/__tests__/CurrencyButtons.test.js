import React from "react";
import { fireEvent, render, screen } from "../../test/reduxRender";
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
  render(<CurrencyButtons />);
  const EURbutton = screen.getByText(/.* eur/i);
  const USDbutton = screen.getByText(/.* usd/i);

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
