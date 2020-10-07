import React from "react";
import { render as rltRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { storeForTest } from "../Redux/store";

export function render(ui, ...options) {
  function Wrapper({ children }) {
    return <Provider store={storeForTest}>{children}</Provider>;
  }

  return rltRender(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";
