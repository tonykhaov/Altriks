import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeFromCart } from "../Redux/actionCart";

function CartItem({ className, item, count, index, removeFromCart }) {
  return (
    <div className={className}>
      <span>
        <p>{item.title}:</p>
        <p>{count}</p>
      </span>
      <span>
        <p>{item.price * count} €</p>
        <button onClick={() => removeFromCart(index)}>X</button>
      </span>
    </div>
  );
}

const StyledCartItem = styled(CartItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span > * {
    display: inline;
    margin-right: 8px;
  }
`;

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeFromCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StyledCartItem);
