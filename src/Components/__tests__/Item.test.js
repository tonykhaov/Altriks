import React from "react";
import { render, screen } from "../../test/reduxRender";
import user from "@testing-library/user-event";
import { addToCart as mockAddToCart } from "../../Redux/actionCart";
import Item from "../Item";
import { itemBuilder } from "../../test/fakeItem";

jest.mock("../../Redux/actionCart");

beforeAll(() => {
  mockAddToCart.mockReturnValue((index) => {
    return { type: "ADD_TO_CART", id: index };
  });
});

afterAll(() => {
  mockAddToCart.mockRestore();
});

test("renders Item with correct datas and add to cart button works", () => {
  const item = itemBuilder();
  const { title, price, thumbnail_url, index } = item;
  render(<Item item={item} index={index} />);

  const titleItem = screen.getByRole("heading");
  const imageItem = screen.getByAltText(title);
  const priceItem = screen.getByText(price);
  const buttonItem = screen.getByRole("button");

  expect(titleItem).toHaveTextContent(title);
  expect(imageItem).toHaveAttribute("src", thumbnail_url);
  expect(priceItem).toHaveTextContent(price);
  expect(priceItem).toHaveClass("price");
  expect(buttonItem).toHaveTextContent(/add to cart/i);

  user.click(buttonItem);
  expect(mockAddToCart).toHaveBeenCalledTimes(1);
  expect(mockAddToCart).toHaveBeenCalledWith(index);
  user.click(buttonItem);
  user.click(buttonItem);
  expect(mockAddToCart).toHaveBeenCalledTimes(3);
});
