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
      <h1>{title}</h1>
      <p>{price} €</p>
      <button onClick={() => addToCart(index)}>Add to cart</button>
    </div>
  );
}

const StyledItem = styled(Item)`
  border: 1px solid black;
`;

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StyledItem);
