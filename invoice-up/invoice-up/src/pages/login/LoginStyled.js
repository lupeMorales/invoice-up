import styled from "styled-components";

export const LoginStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.secondary} 100%
  );

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    background-color: #fff;
    border: none;
    margin: 0 auto;
    border-radius: 20px;
    background: #fff;
    overflow: hidden;
  }
  img {
    width: 100%;
    max-width: 350px;
    object-fit: contain;
  }
  form {
    width: 380px;
    background-color: ${(props) => props.theme.color.secondary};
    padding: 4rem;
    color: ${(props) => props.theme.color.grey};

    h1 {
      font-size: ${(props) => props.theme.fontSizes.large};
    }
    h3 {
      font-size: ${(props) => props.theme.fontSizes.xsmall};
      font-weight: 300;
      padding-bottom: 2rem;
    }
    h1,
    h3 {
      font-family: ${(props) => props.theme.fonts.titleFont};
      color: ${(props) => props.theme.color.light_text};
    }

    label {
      font-size: ${(props) => props.theme.fontSizes.xsmall};
      color: rgba(156, 163, 175, 1);
      padding-bottom: 45px;
    }
    input {
      display: block;
      width: 100%;
      border-radius: 0.375rem;
      border: 1px solid ${(props) => props.theme.color.light_accent};
      outline: 0;
      background-color: ${(props) => props.theme.color.secondary};
      padding: 0.75rem 1rem;
      color: rgba(243, 244, 246, 1);
      font-size: ${(props) => props.theme.fontSizes.xsmall};
    }
    input:focus {
      border-color: ${(props) => props.theme.color.accent};
      color: ${(props) => props.theme.color.dark_text};
      background-color: #fff;
    }
  }

  Button {
    margin: 40px 5px 0;
  }
`;
