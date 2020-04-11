import React from "react";
import styled from "styled-components";

function Footer({ className }) {
  return (
    <footer className={className}>
      <h6>made by Tony KHAOV</h6>
      <p>I don't own the images, they all belong to Alltricks.</p>
    </footer>
  );
}

export default styled(Footer)`
  grid-area: footer;
  text-align: center;
  padding: 16px;
  background: #222;
  h6 {
    font-size: 16px;
    font-weight: normal;
    color: white;
  }

  p {
    color: grey;
  }
`;
