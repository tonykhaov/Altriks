import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeToEUR, changeToUSD } from "../Redux/actionCurrency";

function CurrencyButtons({ className, currency, changeToEUR, changeToUSD }) {
  return (
    <div className={className}>
      <button
        className={currency === "EUR" ? "active" : ""}
        onClick={changeToEUR}
      >
        € EUR
      </button>
      <button
        className={currency === "USD" ? "active" : ""}
        onClick={changeToUSD}
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

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeToEUR,
      changeToUSD,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledCurrencyButtons);
