import PropTypes from "prop-types";
import { Button } from "../../atoms/buttons/Button";
import { HeroStyled, HeroStyledBounce } from "./HeroStyled";

export const Hero = (props) => {
  return (
    <HeroStyled>
      <div>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <Button action={props.action}></Button>
      </div>
      <img
        src={props.image}
        alt="illustration of man watching his income grow"
      ></img>
    </HeroStyled>
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

export const HeroBounce = (props) => {
  return (
    <HeroStyledBounce>
      <div>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <Button action={props.action}></Button>
      </div>
      <img
        src={props.image}
        alt="illustration of man watching his income grow"
      ></img>
    </HeroStyledBounce>
  );
};

HeroStyledBounce.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

HeroStyledBounce.defaultProps = {
  title: "Aqui va un título",
  subtitle: "Aqui va un subtítulo",
};
