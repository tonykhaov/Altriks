import React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducers from "./Redux/rootReducers";

import { GlobalStyle } from "./Global";
import Header from "./Components/Header";
import ShoppingItems from "./Components/ShoppingItems";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

const middleware = [thunk, logger];

const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ShoppingItems />
      <Cart />
      <Footer />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
