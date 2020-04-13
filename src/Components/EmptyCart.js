import React from "react";
import styled from "styled-components";

function EmptyCart({ className }) {
  return (
    <div className={className}>
      <p>
        Nothing in the cart... :( <br /> Go add something to the cart!
      </p>
      <img className="cog" src="icon-cog.svg" alt="cog" />
    </div>
  );
}

export default styled(EmptyCart)`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid coral;
  
  .cog {
    animation: spin 100s forwards infinite;
    width: 32px;
    height: 32px;
    color: grey;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(3600deg);
    }
  }
`;
