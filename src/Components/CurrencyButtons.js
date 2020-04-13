import React from "react";
import styled from "styled-components";

function CurrencyButtons({ className }) {
  return (
    <div className={className}>
      <button className="active">€ EUR</button>
      <button>$ USD</button>
    </div>
  );
}

export default styled(CurrencyButtons)`
  margin: 12px 0;
  button {
    font-size: 18px;
    padding: 8px 32px;
    border: none;
    background: lightgrey;
    cursor: pointer;
  }
  button:hover {
    background: grey;
  }

  .active {
    background: grey;
  }
`;
