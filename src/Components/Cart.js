import React from "react";
import styled from "styled-components";
import CurrencyButtons from "./CurrencyButtons";
import { connect } from "react-redux";
import CartItem from "./CartItem";

function Cart({ className, cart, items }) {
  return (
    <aside className={className}>
      <h1>My Cart</h1>
      <hr />
      {Object.keys(cart).map((key) => (
        <CartItem key={key} item={items[key]} count={cart[key]} />
      ))}
      <h3>Total:</h3>
      <CurrencyButtons />
    </aside>
  );
}

const StyledCart = styled(Cart)`
  grid-area: cart;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
  }

  hr {
    margin: 12px 0 32px;
    color: lightgrey;
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
  }
`;

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  items: state.items.items,
});

export default connect(mapStateToProps)(StyledCart);
