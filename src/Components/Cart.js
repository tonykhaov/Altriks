import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import CurrencyButtons from "./CurrencyButtons";
import CartItem from "./CartItem";
import { Button } from "../Elements/Button";
import { formatPrice } from "../Utilities/helpers";
import EmptyCart from "./EmptyCart";
import { emptyCart } from "../Redux/actionCart";

function Cart({ className }) {
  const cart = useSelector((state) => state.cart.cart);
  const items = useSelector((state) => state.items.items);
  const currency = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();

  const total = Object.keys(cart).reduce((total, previousValue) => {
    return total + items[previousValue].price * cart[previousValue];
  }, 0);

  const isCartEmpty = Object.keys(cart).length > 0 ? false : true;

  const checkout = () => {
    if (isCartEmpty) return;
    dispatch(emptyCart());
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

export default StyledCart;
