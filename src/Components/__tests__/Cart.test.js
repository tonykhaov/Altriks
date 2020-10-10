import React from "react";
import { render, screen } from "../../test/reduxRender";
import Cart from "../Cart";

test("renders Cart with correct datas", () => {
  const { container } = render(<Cart />);
  const cartHeading = screen.getByText(/my cart (.*)/i);
  const emptyCartMessage = screen.getByText(
    /Nothing in the cart\.{3} :\( Go add something to the cart!/i
  );
  const spinningCog = screen.getByAltText(/cog/i);
  const rateText = screen.getByText(/(1 eur = 1.09 usd)/i);
  const total = screen.getByText(/total: \d{1},\d{2} .*/i);
  const checkoutButton = screen.getByText(/checkout/i);

  expect(cartHeading).toBeInTheDocument();
  expect(emptyCartMessage).toBeInTheDocument();
  expect(spinningCog).toBeInTheDocument();
  expect(total).toBeInTheDocument();
  expect(rateText).toBeInTheDocument();
  expect(checkoutButton).toBeDisabled();

  expect(container.firstChild).toMatchInlineSnapshot(`
    .c2 {
      margin: 8px 0;
    }

    .c2 button {
      font-size: 18px;
      padding: 8px 32px;
      border: none;
      background-color: lightgrey;
      cursor: pointer;
    }

    .c2 button:hover {
      background: grey;
    }

    .c2 .active {
      background-color: grey;
    }

    .c4 {
      width: 100%;
      padding: 8px 12px;
      border: none;
      background-color: #118df2;
      color: white;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      outline: none;
      border-radius: 2px;
    }

    .c4:hover,
    .c4:focus {
      background-color: #11b2f2;
    }

    .c4:active {
      background-color: #118df2;
    }

    .c1 {
      padding: 32px 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      border: 5px solid coral;
    }

    .c1 .cog {
      -webkit-animation: spin 100s forwards infinite;
      animation: spin 100s forwards infinite;
      width: 32px;
      height: 32px;
      color: grey;
    }

    .c0 {
      grid-area: cart;
      padding: 24px 24px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c0 h1 {
      font-size: 32px;
    }

    .c0 hr {
      margin: 12px 0;
      color: lightgrey;
    }

    .c0 .items {
      padding: 12px 0 24px;
    }

    .c0 .rate {
      color: grey;
    }

    .c0 .c3 {
      margin-top: 12px;
      padding: 12px 0;
      font-size: 18px;
      font-weight: 700;
    }

    .c0 .c3:disabled {
      background-color: lightgray;
      cursor: auto;
    }

    @media (max-width:768px) {
      .c0 {
        padding: 12px 8px;
      }
    }

    <aside
      class="c0"
    >
      <h1>
        My Cart (
        0
        )
      </h1>
      <hr />
      <div
        class="items"
      >
        <div
          class="c1"
        >
          <p>
            Nothing in the cart... :( 
            <br />
             Go add something to the cart!
          </p>
          <img
            alt="cog"
            class="cog"
            src="icon-cog.svg"
          />
        </div>
      </div>
      <h3>
        Total: 
        0,00 €
      </h3>
      <p
        class="rate"
      >
        (1 EUR = 1.09 USD)
      </p>
      <div
        class="c2"
      >
        <button
          class="active"
        >
          € EUR
        </button>
        <button
          class=""
        >
          $ USD
        </button>
      </div>
      <button
        class="c3 c4"
        disabled=""
      >
        Checkout
      </button>
    </aside>
  `);
});
