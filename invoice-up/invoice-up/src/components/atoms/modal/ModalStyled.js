import styled from "styled-components";

export const ModalStyled = styled.div`
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
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 3px solid ${(props) => props.theme.color.accent};
    border-radius: 10px;
    width: 30%;
  }

  .close-button {
    color: #aaa;
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
  }
  h2 {
    padding-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    line-height: 1.5;
    width: 90%;
  }
`;
