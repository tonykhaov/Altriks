import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <FooterWrapper>
      <h6>made by Tony KHAOV</h6>
      <p>I don't own the images, they all belong to Alltricks.</p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
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
export default Footer;
