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
    gap: 40px;
    padding: 20px;
    background-color: #fff;
    border: none;
    border-radius: 15px;
    margin: 0 auto;
  }
  img {
    width: 100%;
    max-width: 450px;
    object-fit: fill;
  }
`;
