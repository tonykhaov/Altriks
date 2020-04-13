import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  border: none;
  background-color: #118df2;
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border-radius: 2px;
  &:hover,
  &:focus {
    background-color: #11b2f2;
  }

  &:active {
    background-color: #118df2;
  }
`;
