import React from "react";
import { Button } from "../atoms/Button";

import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  background: ${(props) => props.theme.color.primary};

  h2 {
    font-weight: 400;
    color: ${(props) => props.theme.color.light_text};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-size: 3rem;
  }

  li {
    list-style: none;
    display: inline-block;
    padding: 0 10px;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.light_text};
  }

  li:hover {
    color: red;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h2>InvoiceUp</h2>
      <ul>
        <li>Inicio</li>
        <li>Calculadora</li>
        <li>About</li>
      </ul>
      <Button>Empezar a facturar</Button>
    </StyledHeader>
  );
};
