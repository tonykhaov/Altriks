import React from "react";
import styled from "styled-components";

function CartItem({ className, item, count }) {
  return (
    <div className={className}>
      <span>
        <p>{item.title}:</p>
        <p>{count}</p>
      </span>
      <span>
        <p>{item.price * count} €</p>
        <button onClick={() => console.log("supprimer")}>X</button>
      </span>
    </div>
  );
}

export default styled(CartItem)`
  display: flex;
  justify-content: space-between;

  span > * {
    display: inline;
    margin-right: 8px;
  }
`;
