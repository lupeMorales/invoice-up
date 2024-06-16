import styled from "styled-components";

export const ModalInvoiceStyled = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  .modal-content {
    margin: auto;
    padding: 20px;
    width: 40%;
  }

  .close-button {
    background-color: ${(props) => props.theme.color.accent};
    padding: 8px 12px;
    border-radius: 100%;
    color: ${(props) => props.theme.color.primary};
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }

  .close-button:hover,
  .close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.primary};
  }
`;
