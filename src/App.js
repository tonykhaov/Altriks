import React from "react";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import rootReducers from "./Redux/rootReducers";

import { GlobalStyle } from "./Global";
import Header from "./Components/Header";
import ShoppingItems from "./Components/ShoppingItems";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

const store = createStore(rootReducers, {}, composeWithDevTools());

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
