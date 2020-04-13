import React from "react";
import styled from "styled-components";
import CurrencyButtons from "./CurrencyButtons";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { Button } from "../Elements/Button";

function Cart({ className, cart, items }) {
  const total = Object.keys(cart).reduce((total, previousValue) => {
    return total + items[previousValue].price * cart[previousValue];
  }, 0);

  const isCartEmpty = Object.keys(cart).length > 0 ? false : true;

  const checkout = () => {
    if (isCartEmpty) {
      return alert("Empty cart... go add something to your cart");
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
          <p className="empty-message">
            Nothing in the cart... :( <br /> Go add something to the cart!
          </p>
        )}
      </div>
      <h3>Total: {total} €</h3>
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

  .empty-message {
    padding: 8px 0;
    text-align: center;
    border: 5px solid coral;
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
});

export default connect(mapStateToProps)(StyledCart);
