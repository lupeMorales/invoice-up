import PropTypes from "prop-types";
import styled from "styled-components";

import { Button } from "../atoms/Button";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 80px;
  width: 100%
  height: 80vh;
  background-image: linear-gradient(to bottom, ${(props) =>
    props.theme.color.primary}, ${(props) => props.theme.color.secondary} 100%);
  

  div {
    max-width: 500px;
    animation:scale-up-center 1.4s; 
     @keyframes scale-up-center{ 0%{transform:scale(.5)} 100%{transform:scale(1)} }

  }

  h1 {
 
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    padding-bottom: 20px;
    color: ${(props) => props.theme.color.light_text};
  }
  h3 {
    
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.color.light_text};
    padding-bottom: 20px;
  }
  img {
    width: 100%;
    max-width: 550px;
    object-fit: fill;
`;

export const Hero = (props) => {
  return (
    <StyledSection>
      <div>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <Button action="Volver a casa"></Button>
      </div>
      <img
        src={props.image}
        alt="illustration of man watching his income grow"
      ></img>
    </StyledSection>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  title: "Aqui va un título",
  subtitle: "Aqui va un subtítulo",
};
