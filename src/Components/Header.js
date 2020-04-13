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
  @import url("https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@700&display=swap");

  grid-area: header;
  text-align: center;
  padding: 12px;
  background: #008bd2;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  h1 {
    padding-top: 12px;
    font-size: 64px;
    font-family: "Baloo Tammudu 2", cursive;
    font-style: italic;
  }

  p {
    color: #aaa;
    margin-top: -12px;
    font-style: italic;
  }

  .techno {
    color: #fff;
  }
`;
