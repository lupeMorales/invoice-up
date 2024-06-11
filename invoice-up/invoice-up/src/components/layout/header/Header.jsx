import { Link } from "react-router-dom";
import { Button } from "../../atoms/buttons/Button";
import { HeaderStyled } from "./HeaderStyled";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, MenuToggle, MenuIcon } from "./HeaderStyled";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

//ojo cuidao! funciona pero no me gusta ** refactorizar **
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderStyled>
      <h2>
        <Link
          to="/"
          style={linkStyle}
          aria-label="Ir a inicio"
          title="Ir a inicio"
        >
          InvoiceUp
        </Link>
      </h2>
      <MenuToggle onClick={toggleMenu}>
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </MenuToggle>
      <Nav isOpen={isOpen}>
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
        <div className="buttons-wrapper">
          {" "}
          <Link to="/login">
            {" "}
            <Button action="Empezar a facturar"></Button>
          </Link>
          <Link to="/register">
            <Button action="Crear cuenta" variant="outline"></Button>
          </Link>
        </div>
      </Nav>
    </HeaderStyled>
  );
};
