import styled from "styled-components";
//import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import image from "../../../assets/community.png";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  //z-index: 10;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  position: relative;
  border-radius: 10px;
  padding: 20px;
  display: [ flex -webkit-flex];
  flex-direction: column;
`;

/* const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20ox;
  right: 20px;
  height: 32px;
  padding: 0;
  z-index: 10;
`; */
export const ModalInfo = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Overlay>
          <ModalWrapper>
            <h3>Tipos impositivos en el IVA</h3>
            <table>
              <tr>
                <td>Tipo de IVA</td>
                <td>% IVA</td>
                <td>Tipo de bienes</td>
              </tr>
              <tr>
                <td>General</td>
                <td>21%</td>
                <td>
                  La marotía de servicios y propductos como electrodomésticos,
                  coches, entradas de cine...
                </td>
              </tr>
              <tr>
                <td>General</td>
                <td>10%</td>
                <td>
                  La marotía de servicios y propductos como electrodomésticos,
                  coches, entradas de cine...
                </td>
              </tr>
              <tr>
                <td>General</td>
                <td>4%</td>
                <td>
                  La marotía de servicios y propductos como electrodomésticos,
                  coches, entradas de cine...
                </td>
              </tr>
              <tr>
                <td>General</td>
                <td>0%</td>
                <td>
                  La marotía de servicios y propductos como electrodomésticos,
                  coches, entradas de cine...
                </td>
              </tr>
              <tr>
                <td>General</td>
                <td>7%</td>
                <td>
                  La marotía de servicios y propductos como electrodomésticos,
                  coches, entradas de cine...
                </td>
              </tr>
              <tr>
                <td>General</td>
                <td>3%</td>
                <td>
                  La marotía de servicios y propductos como electrodomésticos,
                  coches, entradas de cine...
                </td>
              </tr>
              <tr>
                <td>General</td>
                <td>9,5%</td>
                <td>
                  La marotía de servicios y propductos como electrodomésticos,
                  coches, entradas de cine...
                </td>
              </tr>
            </table>
          </ModalWrapper>
        </Overlay>
      ) : null}
    </>
  );
  /*   return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={image} alt=""></ModalImg>
            <ModalContent>
              <h1>Este es el modal</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </ModalContent>
            <CloseModalButton
              aria-label="Cierra el modal"
              ocClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  ); */
};

ModalInfo.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.bool,
};
