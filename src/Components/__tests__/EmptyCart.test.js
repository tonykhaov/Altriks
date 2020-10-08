import React from "react";
import { render } from "@testing-library/react";
import EmptyCart from "../EmptyCart";

test("renders EmptyCart with correct datas", () => {
  const { getByAltText, getByText, container } = render(<EmptyCart />);

  const emptyCartMessage = getByText(
    /nothing in the cart\.\.\. :\( Go add something to the cart!/i
  );
  const cogImg = getByAltText("cog");

  expect(emptyCartMessage).toBeInTheDocument();
  expect(cogImg).toBeInTheDocument();
  expect(cogImg).toHaveAttribute("src", "icon-cog.svg");

  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
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

    .c0 .cog {
      -webkit-animation: spin 100s forwards infinite;
      animation: spin 100s forwards infinite;
      width: 32px;
      height: 32px;
      color: grey;
    }

    <div
      class="c0"
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
  `);
});
