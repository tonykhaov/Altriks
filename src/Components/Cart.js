import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CurrencyButtons from "./CurrencyButtons";
import CartItem from "./CartItem";
import { Button } from "../Elements/Button";
import { formatPrice } from "../Utilities/helpers";
import EmptyCart from "./EmptyCart";

function Cart({ className, cart, items, currency }) {
  const total = Object.keys(cart).reduce((total, previousValue) => {
    return total + items[previousValue].price * cart[previousValue];
  }, 0);

  const isCartEmpty = Object.keys(cart).length > 0 ? false : true;

  const checkout = () => {
    if (isCartEmpty) {
      return alert("Empty cart... go add something to your cart");
    } else {
      return alert("Email me to get your items, shipped for free!");
    }
  };

  return (
    <aside className={className}>
      <h1>My Cart ({Object.keys(cart).length})</h1>
      <hr />
      <div className="items">
        {!isCartEmpty ? (
          Object.keys(cart).map((key) => (
            <CartItem
              key={key}
              item={items[key]}
              count={cart[key]}
              index={key}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </div>
      <h3>Total: {formatPrice(total, currency)}</h3>
      <p className="rate">(1 EUR = 1.09 USD)</p>
      <CurrencyButtons />
      <Button onClick={checkout}>Checkout</Button>
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
    margin: 12px 0;
    color: lightgrey;
  }

  .items {
    padding: 12px 0 24px;
  }

  .rate {
    color: grey;
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
  }

  ${Button} {
    margin-top: 12px;
    padding: 12px 0;
    font-size: 18px;
    font-weight: 700;
  }
`;

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  items: state.items.items,
  currency: state.currency.currency,
});

export default connect(mapStateToProps)(StyledCart);
