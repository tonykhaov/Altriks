import React from "react";
import Header from "./Components/Header";
import ShoppingItems from "./Components/ShoppingItems";
import Footer from "./Components/Footer";
import styled from "styled-components";

function App() {
  return (
    <StoreWrapper>
      <Header />
      <ShoppingItems />
      <Footer />
    </StoreWrapper>
  );
}

const StoreWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "items cart"
    "footer footer";
  @media (max-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default App;
