import { Link } from "react-router-dom";
import { Button } from "../../atoms/buttons/Button";

import { HeaderStyled } from "./HeaderStyled";

export const Header = () => {
  return (
    <HeaderStyled>
      <h2>InvoiceUp</h2>
      <ul>
        <li>Inicio</li>
        <li>Calculadora</li>
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
