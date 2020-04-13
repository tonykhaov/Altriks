import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addToCart } from "../Redux/actionCart";
import { Button } from "../Elements/Button";
import { formatPrice } from "../Utilities/helpers";

function Item({ item, className, index, addToCart, currency }) {
  const { title, price, thumbnail_url } = item;

  return (
    <div className={className}>
      <img src={thumbnail_url} alt={title} />
      <span>
        <h1>{title}</h1>
        <p className="price">{formatPrice(price, currency)}</p>
      </span>
      <Button onClick={() => addToCart(index)}>Add to cart</Button>
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

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StyledItem);
