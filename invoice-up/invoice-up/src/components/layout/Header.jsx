import { Button } from "../atoms/buttons/Button";

import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${(props) => props.theme.color.primary};

  h2 {
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-size: 3rem;
    color: ${(props) => props.theme.color.light_text};
  }

  li {
    list-style: none;
    display: inline-block;
    padding: 0 10px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.light_text};
  }

  li:hover {
    color: ${(props) => props.theme.color.accent};
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h2>InvoiceUp</h2>
      <ul>
        <li>Inicios</li>
        <li>Calculadora</li>
        <li>About</li>
      </ul>
      <Button action="Empezar a facturar"></Button>
    </StyledHeader>
  );
};
