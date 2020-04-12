import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import updateCart from "../Redux/actionCart";

function Item({ item, className, index, updateCart, cart }) {
  const addToCart = () => {
    const payload = cart[index] + 1 || 1;
    updateCart(index, payload);
  };

  const { title, price, thumbnail_url } = item;
  return (
    <div className={className}>
      <img src={thumbnail_url} alt={title} />
      <h1>{title}</h1>
      <p>{price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

const StyledItem = styled(Item)``;

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StyledItem);
