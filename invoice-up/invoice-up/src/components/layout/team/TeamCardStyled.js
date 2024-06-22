import styled from "styled-components";
import linkedinIcon from "../../../assets/linkedin.svg";

export const TeamCardStyled = styled.article`
  position: relative;
  width: 300px;
  overflow: hidden;

  img {
    display: block;
    margin: auto;
    width: 100%;
    aspect-ratio: 2 / 3;
    max-width: 300px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  div {
    padding: 0 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-color: ${(props) => props.theme.color.primary};
    clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0% 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    height: 100%;
    clip-path: none;
    justify-content: center;
    align-items: center;
  }

  h3 {
    color: ${(props) => props.theme.color.dark_text};
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.normal};
    padding-bottom: 10px;
    text-align: center;
    @media only screen and (max-width: 798px) {
      font-size: ${(props) => props.theme.fontSizes.xsmall};
    }
  }

  h5 {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontSizes.small};
    text-align: center;
    @media only screen and (max-width: 798px) {
      font-size: ${(props) => props.theme.fontSizes.xsmall};
    }
  }

  .linkedin-icon {
    width: 24px;
    height: 24px;
    margin-top: 10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover .linkedin-icon {
    opacity: 1;
  }
`;
