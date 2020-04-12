import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import addToCart from "../Redux/actionCart";

function Item({ item, className, index, dispatch }) {
  const { title, price, thumbnail_url } = item;
  return (
    <div className={className}>
      <img src={thumbnail_url} alt={title} />
      <h1>{title}</h1>
      <p>{price}</p>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", id: index })}>
        Add to cart
      </button>
    </div>
  );
}

const StyledItem = styled(Item)``;

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       addToCart,
//     },
//     dispatch
//   );

export default connect()(StyledItem);
