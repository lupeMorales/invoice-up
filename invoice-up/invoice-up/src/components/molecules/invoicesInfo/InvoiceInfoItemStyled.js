import styled from "styled-components";

export const InvoiceInfoItemStyled = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.color.primary};
  border: solid 2px ${(props) => props.theme.color.accent};
  font-family: ${(props) => props.theme.fonts.titleFont};
  font-size: 1, 6em;
  color: ${(props) => props.theme.color.grey};
  border-radius: 20px;

  .container-edit {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 50%;
  }

  .button-danger {
    color: ${(props) => props.theme.color.accent};
  }
  button:hover {
    background-color: transparent;
  }
`;
