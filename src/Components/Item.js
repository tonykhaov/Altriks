import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addToCart } from "../Redux/actionCart";

function Item({ item, className, index, addToCart }) {
  const { title, price, thumbnail_url } = item;
  return (
    <div className={className}>
      <img src={thumbnail_url} alt={title} />
      <span>
        <h1>{title}</h1>
        <p className="price">{price} €</p>
      </span>
      <button onClick={() => addToCart(index)}>Add to cart</button>
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

  button {
    width: 100%;
    padding: 8px 12px;
    border: none;
    background-color: #118df2;
    color: white;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border-radius: 2px;
    &:hover,
    &:focus {
      background-color: #11b2f2;
    }

    &:active {
      background-color: #118df2;
    }
  }
`;

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StyledItem);
