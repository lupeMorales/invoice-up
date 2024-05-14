import styled from "styled-components";

export const DashboardFormStyled = styled.form`
  border: solid 1px blue;

  input {
    display: block;
    width: calc(100% - 20px);
    margin: 10px auto;

    padding: 8.5px 16px 8.5px 16px;
    border-radius: 40px;
    border: solid 2px white;

    color: white;
    background-color: transparent;
    &::placeholder {
      color: white;
    }
  }

  input {
    display: block;
    width: 100%;
    border-radius: 0.375rem;
    border: 2px solid ${(props) => props.theme.color.light_accent};
    outline: 0;
    background-color: ${(props) => props.theme.color.secondary};
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    margin: 5px 0 10px;
  }
  input:focus {
    border-color: ${(props) => props.theme.color.accent};
    color: ${(props) => props.theme.color.dark_text};
    background-color: #fff;
  }
`;
