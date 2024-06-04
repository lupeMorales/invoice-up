import PropTypes from "prop-types";
import { ButtonIconStyled } from "./ButtonIconStyled";

export const ButtonIcon = () => {
  return <ButtonIconStyled></ButtonIconStyled>;
};

ButtonIcon.propTypes = {
  type: PropTypes.string,
};
