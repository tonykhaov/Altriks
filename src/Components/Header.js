import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <h1>AlTriks</h1>
      <p>E-commerce website coded with React & Apollo (state manager)</p>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  grid-area: header;
  text-align: center;
  padding: 12px;
  background: #008bd2;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 48px;
    padding-bottom: 6px;
  }

  p {
    color: lightgrey;
  }
`;

export default Header;
