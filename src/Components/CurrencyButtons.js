import React from "react";
import styled from "styled-components";

function CurrencyButtons() {
  return (
    <CurrencyButtonsWrapper>
      <button>€ EUR</button>
      <button>$ USD</button>
    </CurrencyButtonsWrapper>
  );
}

const CurrencyButtonsWrapper = styled.div`
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
`;

export default CurrencyButtons;
