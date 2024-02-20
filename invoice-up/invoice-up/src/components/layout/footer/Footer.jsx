import { FooterStyled } from "./FooterStyled";
import { DiagonalSparatorUp } from "../../atoms/DiagonalSeparator";

import { Copyright } from "../../atoms/copyright/Copyright";

export const Footer = () => {
  return (
    <FooterStyled>
      <DiagonalSparatorUp></DiagonalSparatorUp>
      <section>
        <div>
          <h2>InvoiceUp</h2>
          <p>Crea facturas en minutos. Optimiza tu tiempo y tu negocio.</p>
          <nav></nav>
        </div>
        <div>
          <h3>Enlaces Rápidos</h3>
          <nav>
            <ul>
              <li>Inicio</li>
              <li>Calculadora</li>
              <li>Nosotros</li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Legal</h3>
          <nav>
            <ul>
              <li>Política de cookies</li>
              <li>Política de Privacidad</li>
              <li>Aviso Legal</li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul>
            <li>direccion</li>
            <li>mail</li>
            <li>telefono</li>
          </ul>
        </div>
      </section>
      <Copyright></Copyright>
    </FooterStyled>
  );
};
