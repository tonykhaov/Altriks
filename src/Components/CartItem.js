import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeFromCart } from "../Redux/actionCart";

function CartItem({ className, item, count, index, removeFromCart }) {
  return (
    <div className={className}>
      <span>
        <p>{count}x</p>
        <p>{item.title}</p>
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

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeFromCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StyledCartItem);
