import React from "react";
import styled from "styled-components";
import CurrencyButtons from "./CurrencyButtons";
import { connect } from "react-redux";

function Cart({ className, reducer }) {
  return (
    <aside className={className}>
      <h1>My Cart {reducer}</h1>
      <hr />
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
  reducer: state.reducer,
});

export default connect(mapStateToProps)(StyledCart);
