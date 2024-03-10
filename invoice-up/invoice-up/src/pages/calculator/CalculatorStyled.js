import styled from "styled-components";

export const CalculatorStyled = styled.main`
  display: flex;
  flex-direction: row;
  padding: 80px;
  justify-content: space-evenly;
  align-items: center;

  form {
    padding: 30px;
    border-radius: 20px;
    box-shadow: 5px 10px 20px ${(props) => props.theme.color.grey};
  }

  fieldset {
    border-style: none;
  }

  fieldset div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }

  fieldset div p {
    border: 1px solid ${(props) => props.theme.color.dark_text};
  }
  legend {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.dark_text};
  }
  label {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.dark_text};
  }
  section div:nth-child(1) {
    padding: 30px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 20px;
  }
  section div:nth-child(2) {
    padding: 30px;
    background-color: ${(props) => props.theme.color.light_accent};
    border-radius: 20px;
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
  p:nth-child(4),
  p:nth-child(2) {
    font-size: ${(props) => props.theme.fontSizes.small};
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    text-align: end;
    margin: 8px 0 25px;
  }
`;
