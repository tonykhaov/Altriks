import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../Redux/actionCart";
import { Button } from "../Elements/Button";
import { formatPrice } from "../Utilities/helpers";

function Item({ item, className, index }) {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency);

  const { title, price, thumbnail_url } = item;
  return (
    <div className={className}>
      <img src={thumbnail_url} alt={title} />
      <span>
        <h1>{title}</h1>
        <p className="price">{formatPrice(price, currency)}</p>
      </span>
      <Button onClick={() => dispatch(addToCart(index))}>Add to cart</Button>
    </div>
  );
}

const StyledItem = styled(Item)`
  padding: 8px 12px 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .price {
    margin-top: 8px;
    margin-bottom: 12px;
  }
`;

export default StyledItem;
