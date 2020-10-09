import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render Header with correct infos", async () => {
  const { container } = render(<Header />);

  expect(screen.getByRole("heading")).toHaveTextContent(/altriks/i);
  expect(screen.getByText(/react/i)).toBeInTheDocument();
  expect(screen.getByText(/redux/i)).toBeInTheDocument();

  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      grid-area: header;
      text-align: center;
      padding: 12px;
      background: #008bd2;
      color: white;
      box-shadow: 0 1px 2px rgba(0,0,0,0.5);
    }

    .c0 h1 {
      padding-top: 12px;
      font-size: 64px;
      font-family: "Baloo Tammudu 2",cursive;
      font-style: italic;
    }

    .c0 p {
      color: #aaa;
      margin-top: -12px;
      font-style: italic;
    }

    .c0 .techno {
      color: #fff;
    }

    <header
      class="c0"
    >
      <h1>
        AlTriks
      </h1>
      <p>
        E-commerce website coded with 
        <span
          class="techno"
        >
          React
        </span>
         and
         
        <span
          class="techno"
        >
          Redux
        </span>
      </p>
    </header>
  `);
});
