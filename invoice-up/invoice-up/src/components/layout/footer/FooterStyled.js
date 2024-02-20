import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin-top: 300px;
  height: 70vh;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.secondary} 100%
  );
  div {
    padding-top: 40px;
  }
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  h2 {
    max-width: 800px;
    text-align: start;
    padding-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.color.light_text};
  }
  h3 {
    max-width: 800px;
    text-align: start;
    padding-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.color.light_text};
  }
  p,
  li {
    width: 220px;
    text-align: center;
    text-align: start;
    padding-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: 1.4rem;
    color: ${(props) => props.theme.color.light_text};
    list-style: none;
  }
`;
