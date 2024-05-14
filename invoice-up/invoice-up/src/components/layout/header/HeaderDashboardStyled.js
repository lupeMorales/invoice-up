import styled from "styled-components";

export const HeaderDashboardStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${(props) => props.theme.color.primary};

  h2 {
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.color.light_text};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.light_text};
  }

  li {
    list-style: none;
    display: inline-block;
    padding: 0 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.light_text};
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.color.accent};
      padding: 8px 6px;
      border-radius: 50px;
    }
  }

  p:hover {
    color: ${(props) => props.theme.color.accent};
  }
  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  img {
    width: 50px;
  }
`;
