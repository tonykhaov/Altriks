import React from "react";
import styled from "styled-components";
import { items } from "../api.js";
import Item from "./Item";

function AvailableItems({ className }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default styled(AvailableItems)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
  grid-gap: 24px;
  justify-content: center;
`;
