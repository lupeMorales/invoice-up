import React from "react";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/layout/Hero";

import { DiagonalSparator } from "../components/atoms/DiagonalSeparator";
import { FeaturesSection } from "../components/layout/FeaturesSection";
import { InfoSection } from "../components/layout/InfoSection";
import image from "../assets/growth.png";
import imageInfo from "../assets/files.png";
import imageRelax from "../assets/stay-at-home.png";
import imageNoErrors from "../assets/no-errors.png";
import { CTA } from "../components/layout/CTA";

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
      <InfoSection
        title="Crea facturas profesionales"
        subtitle="Mejora tu imagen profesional."
        image={imageInfo}
        alt="files picture"
        text="Impulsa tu negocio utilizando InvoiceUp para dar una imagen más profesional.

Añadir facturas a tu proceso de ventas os brindará, a ti y a tu cliente, un registro claro de la venta y le dará un toque profesional a la transacción."
      ></InfoSection>
      <CTA
        title="Crea tu primera factura gratis AHORA."
        subtitle="Dile adiós al papeleo. Envía facturas profesionales hoy mismo, GRATIS"
      ></CTA>
      <InfoSection
        title="InvoiceUp trabaja por tí"
        subtitle="Facturación inteligente"
        image={imageRelax}
        alt="man stay at home"
        text="No más plantillas de Excell o Word. Tu logotipo y datos de empresa aparecen automáticamente en cada factura:
        No necesitas asignar números de factura o calcular precios e Iva, InvoiceUp lo hace por tí."
      ></InfoSection>
      <InfoSection
        direction="reverse"
        title="Libre de errores"
        subtitle="Facturas perfectas y sin errores, siempre."
        image={imageNoErrors}
        alt="invoice without errors"
        text="Tanto si tienes que aplicar el IVA como si no, tus facturas deben cumplir con algunos requisitos legales. 

        Hemos preparado un intuitivo proceso paso a paso que reduce el riesgo de cometer errores u olvidarse de información importante. Con InvoiceUp tienes la tranquilidad de que tus facturas son correctas."
      ></InfoSection>
    </div>
  );
};
