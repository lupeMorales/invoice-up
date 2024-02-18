import React from "react";
import styled from "styled-components";
import { FeactureCard } from "../molecules/FeactureCard";
import iconSpeed from "../../assets/speed.png";

const FeaturesWrapper = styled.div`
  /*  
  display: grid;
  gap: 1rem;
  grid-auto-rows: 50rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  align-items: center;
  margin: auto; */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding-top: 80px;
`;

export const Features = () => {
  return (
    <FeaturesWrapper>
      <FeactureCard
        image={iconSpeed}
        alt="iconSpeed"
        title="Rápido y fácil"
        text="Puedes crear facturas fácilmente allí donde estés. Desde la comodidad de tu sofá con tu móvil o tablet o desde el ordenador de tu despacho. InvoiceUp se adapta a tu ritmo de vida."
      ></FeactureCard>
      <FeactureCard
        image={iconSpeed}
        title="Crea facturas gratis"
        text="Olvídate de pagar costosas suscripciones o software para crear facturas. Con InvoiceUp, puedes crear y enviar tantas facturas como necesites, sin restricciones ni costos adicionales."
      ></FeactureCard>
      <FeactureCard
        image={iconSpeed}
        title="Envío instantáneo"
        text="Con InvoiceUp, tus facturas llegan a tus clientes en un instante. Olvídate de las esperas y los retrasos: envía tus facturas por correo electrónico o descárgalas en PDF con solo un clic."
      ></FeactureCard>
      <FeactureCard
        image={iconSpeed}
        title="Plantillas personalizables"
        text="No necesitas conocimientos de diseño ni experiencia previa. La interfaz intuitiva de InvoiceUp te permite crear facturas personalizadas en cuestión de minutos."
      ></FeactureCard>
    </FeaturesWrapper>
  );
};
