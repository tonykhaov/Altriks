import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../Redux/actionItems";
import Item from "./Item";

function AvailableItems({ className }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(getItems);
  }, [dispatch]);
  return (
    <div className={className}>
      {items.map((item) => (
        <Item key={item.id} item={item} index={items.indexOf(item)} />
      ))}
    </div>
  );
}

const StyledAvailableItems = styled(AvailableItems)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 200px));
  justify-content: center;
  align-items: stretch;
  grid-gap: 12px;
`;

export default StyledAvailableItems;
