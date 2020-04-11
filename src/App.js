import React from "react";
import styled from "styled-components";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import rootReducers from "./Redux/rootReducers";

import Header from "./Components/Header";
import ShoppingItems from "./Components/ShoppingItems";
import Footer from "./Components/Footer";

const store = createStore(rootReducers, {}, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <StoreWrapper>
        <Header />
        <ShoppingItems />
        <Footer />
      </StoreWrapper>
    </Provider>
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
