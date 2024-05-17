import styled from "styled-components";

export const CalculatorStyled = styled.main`
  display: flex;
  flex-direction: row;
  padding: 80px;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.dark_text};
    padding: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    width: 500px;
    min-width: 360px;
    padding: 80px 30px;
    border-radius: 20px;
    box-shadow: 5px 10px 20px ${(props) => props.theme.color.grey};
  }

  fieldset {
    border-style: none;
  }

  fieldset div {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: baseline;
  }

  fieldset div p {
    border: 1px solid ${(props) => props.theme.color.dark_text};
  }
  legend {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.dark_text};
    padding: 20px;
  }
  label {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.dark_text};
  }
  input {
    font-size: ${(props) => props.theme.fontSizes.small};
    border: 1px solid ${(props) => props.theme.color.dark_text};
    border-radius: 5px;
    padding: 5px;
    text-align: end;
    margin: 8px 15px 25px 45px;
  }
  section div:nth-child(1) {
    width: 500px;
    min-width: 360px;
    margin-bottom: 30px;
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
// Estilos del Tooltip
export const Category = styled.th`
  font-family: ${(props) => props.theme.fonts.titleFont};
  color: ${(props) => props.theme.color.primary};
  padding-bottom: 20px;

  font-size: ${(props) => props.theme.fontSizes.small};
`;
export const Cell = styled.td`
  text-align: ${(props) => (props.align === "start" ? "start" : "center")};
  padding: 10px 20px;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => props.theme.color.darl_text};
`;
export const Title = styled.caption`
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.titleFont};
  color: ${(props) => props.theme.color.primary};
  text-align: center;
  padding-bottom: 20px;
`;
export const Subtitle = styled.caption`
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  font-weight: 300;
  color: ${(props) => props.theme.color.dark_text};
  text-align: center;
  width: 500px;
  padding-bottom: 20px;
  text-align: center;
`;
export const Table = styled.table`
  padding: 4rem 2rem;
`;
