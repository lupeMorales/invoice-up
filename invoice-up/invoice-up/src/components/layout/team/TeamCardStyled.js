import styled from "styled-components";

export const TeamCardStyled = styled.article`
  position: relative;
  width: 300px;

  img {
    display: block;
    margin: auto;
    width: 100%;
    aspect-ratio: 2/3;
    max-width: 300px;

    object-fit: fill;
    margin-bottom: 20px;
  }
  div {
    padding: 0 20px;
    position: absolute;
    bottom: 0px;
    -webkit-clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0% 100%);
    width: 300px;
    height: 150px;
    background-color: ${(props) => props.theme.color.primary};
  }
  h3 {
    margin-top: 50px;
    padding-bottom: 10px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.color.darl_text};
    @media only screen and (max-width: 798px) {
      max-width: 290px;
      font-size: ${(props) => props.theme.fontSizes.xlarge};
    }
  }
  h5 {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.darl_text};
    @media only screen and (max-width: 798px) {
      max-width: 290px;
      font-size: ${(props) => props.theme.fontSizes.xlarge};
    }
  }
`;
