// Mostrar el modal
import React from "react";
import { ModalStyled } from "./ModalStyled";

const Modal = ({ children, onClose }) => {
  return (
    <ModalStyled>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </ModalStyled>
  );
};

export default Modal;
