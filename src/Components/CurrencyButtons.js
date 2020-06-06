import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeToEUR, changeToUSD } from "../Redux/actionCurrency";

function CurrencyButtons({ className }) {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency);

  return (
    <div className={className}>
      <button
        className={currency === "EUR" ? "active" : ""}
        onClick={() => dispatch(changeToEUR())}
      >
        € EUR
      </button>
      <button
        className={currency === "USD" ? "active" : ""}
        onClick={() => dispatch(changeToUSD())}
      >
        $ USD
      </button>
    </div>
  );
}

const StyledCurrencyButtons = styled(CurrencyButtons)`
  margin: 8px 0;
  button {
    font-size: 18px;
    padding: 8px 32px;
    border: none;
    background-color: lightgrey;
    cursor: pointer;
  }
  button:hover {
    background: grey;
  }

  .active {
    background-color: grey;
  }
`;

export default StyledCurrencyButtons;
