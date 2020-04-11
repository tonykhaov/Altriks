import React from "react";
import styled from "styled-components";
import AvailableItems from "./AvailableItems";

function ShoppingItems({ className }) {
  return (
    <main className={className}>
      <h1>Items Available</h1>
      <hr />
      <AvailableItems />
    </main>
  );
}

export default styled(ShoppingItems)`
  grid-area: items;
  padding: 24px 48px;
  border-right: 1px solid lightgrey;

  hr {
    margin: 12px 0;
    color: lightgrey;
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
  }
`;
