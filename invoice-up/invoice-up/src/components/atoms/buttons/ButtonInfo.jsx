import { ButtonInfoStyled } from "./ButtonInfoStyled";
import PropTypes from "prop-types";

export const ButtonInfo = () => {
  return <ButtonInfoStyled>ButtonInfo</ButtonInfoStyled>;
};

ButtonInfo.propTypes = {
  variant: PropTypes.string,
  action: PropTypes.string.isRequired,
};

ButtonInfo.defaultProps = {
  action: "i",
};
