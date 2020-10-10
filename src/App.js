import React from "react";
import { Provider } from "react-redux";
import { storeForProd } from "./Redux/store";
import Header from "./Components/Header";
import ShoppingItems from "./Components/ShoppingItems";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <Provider store={storeForProd}>
      <Header />
      <ShoppingItems />
      <Cart />
      <Footer />
    </Provider>
  );
}

export default App;
