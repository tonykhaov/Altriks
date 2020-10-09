import React from "react";
import { itemBuilder } from "../../test/fakeItem";
import { render, screen } from "../../test/reduxRender";
import CartItem from "../CartItem";
import user from "@testing-library/user-event";
import { removeFromCart as mockRemoveFromCart } from "../../Redux/actionCart";

jest.mock("../../Redux/actionCart");

beforeAll(() => {
  mockRemoveFromCart.mockReturnValue((index) => {
    return { type: "REMOVE_FROM_CART", id: index };
  });
});

afterEach(() => {
  mockRemoveFromCart.mockClear();
});

afterAll(() => {
  mockRemoveFromCart.mockRestore();
});

test("renders CartItem with correct datas and can remove item from the cart", () => {
  const item = itemBuilder();
  const count = 0;
  const { title, price, index } = item;
  render(<CartItem item={item} count={count} index={index} />);

  const removeButton = screen.getByRole("button");
  expect(screen.getByText(count + "x")).toHaveTextContent("0x");
  expect(screen.getByText(title)).toHaveTextContent(title);
  expect(screen.getByText(price)).toHaveTextContent(price);

  user.click(removeButton);
  expect(mockRemoveFromCart).toHaveBeenCalled();
});

test("CartItem updates on count incrementation", () => {
  const item = itemBuilder();
  const counts = [5, 6, 7];
  const { index } = item;
  const { rerender } = render(
    <CartItem item={item} count={counts[0]} index={index} />
  );
  expect(screen.getByText(counts[0] + "x")).toHaveTextContent("5x");

  rerender(<CartItem item={item} count={counts[1]} index={index} />);
  expect(screen.getByText(counts[1] + "x")).toHaveTextContent("6x");

  rerender(<CartItem item={item} count={counts[2]} index={index} />);
  expect(screen.getByText(counts[2] + "x")).toHaveTextContent("7x");
});
