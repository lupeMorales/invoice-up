import styled from "styled-components";

export const HeaderDashboardStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${(props) => props.theme.color.primary};
  box-shadow: -1px 10px 20px 0px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: -1px 10px 20px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: -1px 10px 20px 0px rgba(0, 0, 0, 0.33);

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
    padding: 0 40px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.light_text};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.color.accent};
      padding: 8px 16px;
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
