import React from "react";
import styled from "styled-components";

function Item({ item, className }) {
  return (
    <div className={className}>
      <img src={item.thumbnail_url} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.price}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default styled(Item)``;
