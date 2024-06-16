import styled from "styled-components";

export const HeroLegalStyled = styled.section`
  padding: 80px;
  width: 100%;
  height: 10vh;
  background: ${(props) => props.theme.color.primary};
  background-image: linear-gradient(
    155deg,
    ${(props) => props.theme.color.primary} 55%,
    ${(props) => props.theme.color.grey} 100%
  );

  h1 {
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    padding-bottom: 20px;
    color: ${(props) => props.theme.color.light_text};
  }
`;
