import styled from "styled-components";
import { FeactureCard } from "../molecules/FeactureCard";
import iconSpeed from "../../assets/speed-blue.png";
import iconPig from "../../assets/piggy-bank.png";
import iconPlane from "../../assets/plane.png";
import iconBrush from "../../assets/brush.png";

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 80px 0;
  @media only screen and (max-width: 798px) {
    padding: 80px 20px;
  }
`;

export const FeaturesAbout = () => {
  return (
    <FeaturesWrapper>
      <FeactureCard
        title="Enfocados en tí"
        text="Desarrollamos productos y servicios basándonos en los comentarios de nuestros clientes. Porque tú eres lo primero"
      ></FeactureCard>
      <FeactureCard
        title="Innovación"
        text="Invertimos en investigación para ofrecer a nuestros clientes las últimas soluciones tecnológicas en materia de facturación."
      ></FeactureCard>
      <FeactureCard
        title="Sostenibilidad"
        text="Apoyamos iniciativas y causas para un futuro más sostenible. Utilizamos los recursos de manera responsable y eficiente."
      ></FeactureCard>
    </FeaturesWrapper>
  );
};
