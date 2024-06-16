/* import styled from "styled-components";

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
 */
/* import styled from "styled-components";

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
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-color: ${(props) => props.theme.color.primary};
    padding: 20px;
    clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0% 100%);
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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

  h3,
  h5 {
    color: ${(props) => props.theme.color.dark_text};
    transition: opacity 0.3s ease-in-out;
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

  &:hover h3,
  &:hover h5 {
    opacity: 1;
  }

  .linkedin-icon {
    margin-top: 10px;
    color: #0077b5;
    font-size: 24px;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  &:hover .linkedin-icon {
    opacity: 1;
  }
`;
 */
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

  h3,
  h5 {
    color: ${(props) => props.theme.color.dark_text};
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.normal};
    padding-bottom: 10px;
    @media only screen and (max-width: 798px) {
      font-size: ${(props) => props.theme.fontSizes.xlarge};
    }
  }

  h5 {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontSizes.small};
    @media only screen and (max-width: 798px) {
      font-size: ${(props) => props.theme.fontSizes.xlarge};
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
