import React from "react";
import styled from "styled-components";

function Footer({ className }) {
  return (
    <footer className={className}>
      <h6>JOIN THE ALTRIKS PELOTON</h6>
      <div className="social-medias">
        <a href="https://twitter.com/Alltricks_com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/alltricks">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/alltricks_com/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default styled(Footer)`
  grid-area: footer;
  text-align: center;
  padding: 12px 0 6px;
  background: #222;
  color: white;

  h6 {
    font-size: 14px;
  }

  .social-medias {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 192px;
    margin-top: 12px;
  }

  .fab {
    font-size: 24px;
  }

  .social-medias a:hover {
    color: grey;
  }
`;
