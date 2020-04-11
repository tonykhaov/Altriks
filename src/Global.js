import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  img {
    max-width: 100%;
  }
  
  h1 {
    margin: 0;
  }

  #root {
    height: 100vh;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "items cart"
        "footer footer";
  }
  
  @media (max-width: 1024px) {
    #root {
        grid-template-columns: 2fr 1fr;
    }
  }
  @media (max-width: 768px) {
    #root {
    grid-template-columns: 1fr 1fr;
    }
  }
`;
