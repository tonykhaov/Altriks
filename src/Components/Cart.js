import React from "react";
import styled from "styled-components";
import CurrencyButtons from "./CurrencyButtons";
import { connect } from "react-redux";
import CartItem from "./CartItem";

function Cart({ className, cart, items }) {
  const total = Object.keys(cart).reduce((total, previousValue) => {
    return total + items[previousValue].price * cart[previousValue];
  }, 0);

  return (
    <aside className={className}>
      <h1>My Cart ({Object.keys(cart).length})</h1>
      <hr />
      <div className="items">
        {Object.keys(cart).length > 0 ? (
          Object.keys(cart).map((key) => (
            <CartItem
              key={key}
              item={items[key]}
              count={cart[key]}
              index={key}
            />
          ))
        ) : (
          <p>
            Nothing in the cart... :( <br /> Go buy something!
          </p>
        )}
      </div>
      <h3>Total: {total} €</h3>
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
    margin: 12px 0;
    color: lightgrey;
  }

  .items {
    padding: 12px 0 24px;
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
