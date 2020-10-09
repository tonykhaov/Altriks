import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "../Footer";

test("renders Footer with correct datas ", () => {
  const { container } = render(<Footer />);

  expect(screen.getByRole("heading")).toHaveTextContent(
    /join the altriks peloton/i
  );
  expect(screen.getAllByRole("link").length).toBe(3);

  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      grid-area: footer;
      text-align: center;
      padding: 12px 0 6px;
      background: #222;
      color: white;
    }

    .c0 h6 {
      font-size: 14px;
    }

    .c0 .social-medias {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: space-around;
      -webkit-justify-content: space-around;
      -ms-flex-pack: space-around;
      justify-content: space-around;
      margin: 0 auto;
      max-width: 192px;
      margin-top: 12px;
    }

    .c0 .fab {
      font-size: 24px;
    }

    .c0 .social-medias a:hover {
      color: grey;
    }

    <footer
      class="c0"
    >
      <h6>
        JOIN THE ALTRIKS PELOTON
      </h6>
      <div
        class="social-medias"
      >
        <a
          href="https://twitter.com/Alltricks_com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            class="fab fa-twitter"
          />
        </a>
        <a
          href="https://www.facebook.com/alltricks"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            class="fab fa-facebook-f"
          />
        </a>
        <a
          href="https://www.instagram.com/alltricks_com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            class="fab fa-instagram"
          />
        </a>
      </div>
    </footer>
  `);
});
