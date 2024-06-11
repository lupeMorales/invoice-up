import { useState } from "react";
import imageDeafult from "../../../assets/avatar.webp";
import { Link } from "react-router-dom";
import {
  HeaderDashboardStyled,
  Nav,
  MenuToggle,
} from "./HeaderDashboardStyled";
import { FaBars, FaTimes } from "react-icons/fa";

//ojo cuidao! funciona pero no me gusta ** refactorizar **
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

export const HeaderDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <HeaderDashboardStyled>
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
            <Link to="/dashboard" style={linkStyle} onClick={handleLinkClick}>
              Nueva factura
            </Link>
          </li>
          <li>
            <Link
              to="/mis-facturas"
              style={linkStyle}
              onClick={handleLinkClick}
            >
              Mis facturas
            </Link>
          </li>
        </ul>
        <div className="container-user">
          <p>userName</p>
          <img src={imageDeafult} alt="image usuario" />
        </div>
      </Nav>
    </HeaderDashboardStyled>
  );
};
