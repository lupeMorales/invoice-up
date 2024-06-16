import PropTypes from "prop-types";
import { HeroLegalStyled } from "./HeroLegalStyled";
export const HeroLegal = (props) => {
  return (
    <HeroLegalStyled>
      <div>
        <h1>{props.title}</h1>
      </div>
    </HeroLegalStyled>
  );
};

HeroLegal.propTypes = {
  title: PropTypes.string.isRequired,
};

HeroLegal.defaultProps = {
  title: "Aqui va un título",
};
