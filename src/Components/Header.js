import React from "react";
import styled from "styled-components";

function Header({ className }) {
  return (
    <header className={className}>
      <h1>AlTriks</h1>
      <p>
        E-commerce website coded with <span className="techno">React</span> et{" "}
        <span className="techno">Redux</span>
      </p>
    </header>
  );
}

export default styled(Header)`
  grid-area: header;
  text-align: center;
  padding: 12px;
  background: #008bd2;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 48px;
    padding-bottom: 6px;
    margin: 0;
  }

  p {
    color: #aaa;
    font-style: italic;
  }

  .techno {
    color: #fff;
  }
`;
