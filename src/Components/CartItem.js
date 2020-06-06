import React from "react";
import styled from "styled-components";

import { removeFromCart } from "../Redux/actionCart";
import { formatPrice } from "../Utilities/helpers";
import { useSelector, useDispatch } from "react-redux";

function CartItem({ className, item, count, index }) {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency);

  const { title, price } = item;
  return (
    <div className={className}>
      <span>
        <p>{count}x</p>
        <p>{title}</p>
      </span>
      <span>
        <p>{formatPrice(price, currency)}</p>
        <button onClick={() => dispatch(removeFromCart(index))}>X</button>
      </span>
    </div>
  );
}

const StyledCartItem = styled(CartItem)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4px 0;
  border-bottom: 1px solid black;

  span > * {
    display: inline;
    margin-right: 6px;
  }

  button {
    cursor: pointer;
  }
`;

export default StyledCartItem;
