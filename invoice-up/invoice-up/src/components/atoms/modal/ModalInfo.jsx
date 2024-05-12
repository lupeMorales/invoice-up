import PropTypes from "prop-types";

export const ModalInfo = ({ showModal, setShowModal }) => {
  return <>{showModal ? <div>Soy un Modal</div> : null}</>;
};

ModalInfo.propTypes = {
  showModal: PropTypes.bool,
};
