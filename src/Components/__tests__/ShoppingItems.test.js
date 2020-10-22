import React from "react";
import { render, screen } from "../../test/reduxRender";
import ShoppingItems from "../ShoppingItems";

test("renders ShoppingItems component with correct datas", () => {
  const { container } = render(<ShoppingItems />);

  expect(screen.getByText(/items available/i)).toBeInTheDocument();

  expect(container.firstChild).toMatchInlineSnapshot(`
    .c3 {
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

    .c3:hover,
    .c3:focus {
      background-color: #11b2f2;
    }

    .c3:active {
      background-color: #118df2;
    }

    .c2 {
      padding: 8px 12px 16px;
      border: 1px solid lightgrey;
      border-radius: 4px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .c2 .price {
      margin-top: 8px;
      margin-bottom: 12px;
    }

    .c1 {
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(160px,200px));
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: stretch;
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      grid-gap: 12px;
    }

    .c0 {
      grid-area: items;
      padding: 24px 48px;
      border-right: 1px solid lightgrey;
      overflow-y: auto;
      height: calc(90vh - 103px);
    }

    .c0 hr {
      margin: 12px 0;
      color: lightgrey;
    }

    @media (max-width:768px) {
      .c0 {
        padding: 12px 8px;
      }
    }

    <main
      class="c0"
    >
      <h1>
        Items Available
      </h1>
      <hr />
      <div
        class="c1"
      >
        <div
          class="c2"
        >
          <img
            alt="Bike"
            src="/bike.jpg"
          />
          <span>
            <h1>
              Bike
            </h1>
            <p
              class="price"
            >
              160,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="BikeAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="Helmet"
            src="/helmet.jpg"
          />
          <span>
            <h1>
              Helmet
            </h1>
            <p
              class="price"
            >
              39,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="HelmetAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="T-shirt"
            src="/tshirt.jpg"
          />
          <span>
            <h1>
              T-shirt
            </h1>
            <p
              class="price"
            >
              17,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="T-shirtAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="Backpack"
            src="/backpack.jpg"
          />
          <span>
            <h1>
              Backpack
            </h1>
            <p
              class="price"
            >
              57,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="BackpackAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="Pant"
            src="/pant.jpg"
          />
          <span>
            <h1>
              Pant
            </h1>
            <p
              class="price"
            >
              37,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="PantAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="Gloves"
            src="/gloves.jpg"
          />
          <span>
            <h1>
              Gloves
            </h1>
            <p
              class="price"
            >
              7,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="GlovesAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="Swimming Suit"
            src="/swimming_suit.jpg"
          />
          <span>
            <h1>
              Swimming Suit
            </h1>
            <p
              class="price"
            >
              70,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="Swimming SuitAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="Goggles"
            src="/goggles.jpg"
          />
          <span>
            <h1>
              Goggles
            </h1>
            <p
              class="price"
            >
              4,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="GogglesAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="Swimming Cap"
            src="/swimming_cap.jpg"
          />
          <span>
            <h1>
              Swimming Cap
            </h1>
            <p
              class="price"
            >
              14,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="Swimming CapAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="Socks"
            src="/socks.jpg"
          />
          <span>
            <h1>
              Socks
            </h1>
            <p
              class="price"
            >
              6,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="SocksAddToCartButton"
          >
            Add to cart
          </button>
        </div>
        <div
          class="c2"
        >
          <img
            alt="Wheel"
            src="/wheel.jpg"
          />
          <span>
            <h1>
              Wheel
            </h1>
            <p
              class="price"
            >
              60,00 €
            </p>
          </span>
          <button
            class="c3"
            data-testid="WheelAddToCartButton"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  `);
});
