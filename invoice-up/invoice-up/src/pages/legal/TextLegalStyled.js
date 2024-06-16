import styled from "styled-components";

export const TextoLegalStyled = styled.div`
  padding: 8%;
  h2 {
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.color.secondary};
    padding-bottom: 20px;

    @media only screen and (max-width: 798px) {
      line-height: 1.5;
      font-weight: 300;
    }
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.dark_text};
    padding-bottom: 20px;
  }
`;
