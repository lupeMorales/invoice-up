import { Link } from "react-router-dom";
import { Button } from "../../atoms/buttons/Button";

import { HeaderStyled } from "./HeaderStyled";

//ojo cuidao! funciona pero no me gusta ** refactorizar **
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

export const Header = () => {
  return (
    <HeaderStyled>
      <h2>InvoiceUp</h2>
      <ul>
        <li>
          <Link to="/" style={linkStyle}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/calculadora-de-autonomos" style={linkStyle}>
            Calculadora de autónomos
          </Link>
        </li>
        <li>About</li>
      </ul>
      <div>
        {" "}
        <Link to="/login">
          {" "}
          <Button action="Empezar a facturar"></Button>
        </Link>
        <Link to="/register">
          <Button action="Crear cuenta" variant="outline"></Button>
        </Link>
      </div>
    </HeaderStyled>
  );
};
