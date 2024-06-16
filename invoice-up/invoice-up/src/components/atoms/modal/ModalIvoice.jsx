// Mostrar el modal

import { ModalInvoiceStyled } from "./ModalStyled";

const ModalIvoice = ({ children, onClose }) => {
  return (
    <ModalInvoiceStyled>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </ModalInvoiceStyled>
  );
};

export default ModalIvoice;
