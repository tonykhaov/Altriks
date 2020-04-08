import React, { useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";
import Cart from "./Cart";
import { gql, useQuery } from "@apollo/client";

const QUERY_SALE_ITEMS = gql`
  query {
    itemsForSale @client {
      id
      title
      thumbnail_url
      price
    }
  }
`;
function ShoppingItems() {
  // const itemsToDisplay = items.map((item) => (
  //   <Item key={item.id} item={item} />
  // ));
  const { data } = useQuery(QUERY_SALE_ITEMS);
  return (
    <>
      <ItemsWrapper>
        <h1>Items Available</h1>
        <hr />
        <ItemsContainer>
          {data &&
            data.itemsForSale.map((item) => <div key={item.id} {...item} />)}
        </ItemsContainer>
      </ItemsWrapper>
      <Cart />
    </>
  );
}

const ItemsWrapper = styled.main`
  grid-area: items;
  padding: 24px 48px;
  border-right: 1px solid lightgrey;

  hr {
    margin: 12px 0;
    color: lightgrey;
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
  }
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
  grid-gap: 12px;
`;
export default ShoppingItems;
