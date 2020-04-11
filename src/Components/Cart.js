import React from "react";
import styled from "styled-components";
import CurrencyButtons from "./CurrencyButtons";

function Cart({ className }) {
  return (
    <aside className={className}>
      <h1>My Cart</h1>
      <hr />
      <h3>Total:</h3>
      <CurrencyButtons />
    </aside>
  );
}

export default styled(Cart)`
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
