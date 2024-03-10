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
  legend {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.primary};
  }
  label {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.dark_text};
  }
  section div:nth-child(1) {
    padding: 30px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 20px;
    z-index: 1;
  }
  section div:nth-child(2) {
    padding: 30px;
    background-color: ${(props) => props.theme.color.light_primary};
    border-radius: 0 0 20px 20px;
  }
`;
