import React from "react";
import { Button } from "../components/atoms/Button";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/layout/Hero";
import image from "../assets/Growth (2).png";

import { DiagonalSparator } from "../components/atoms/DiagonalSeparator";

import { FeaturesSection } from "../components/layout/FeaturesSection";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero
        title="Crea facturas profesionales en minutos"
        subtitle="InvoiceUp te permite crear facturas de forma fácil y rápida, con diferentes plantillas de facturas personalizables."
        image={image}
      />
      <DiagonalSparator />
      <FeaturesSection></FeaturesSection>

      {/*       <Heading
        title="InvoiceUp y olvidate del papeleo"
        subtitle="Ahorra tiempo y dinero, mejora tu imagen profesional y optimiza tu flujo de trabajo."
      ></Heading>

      <Features></Features> */}
    </div>
  );
};
