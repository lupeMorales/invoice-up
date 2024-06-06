import { HeaderDashboardStyled } from "./HeaderDashboardStyled";
import imageDeafult from "../../../assets/avatar.webp";
import { Link } from "react-router-dom";
//ojo cuidao! funciona pero no me gusta ** refactorizar **
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

export const HeaderDashboard = () => {
  return (
    <HeaderDashboardStyled>
      <h2>
        {" "}
        <Link
          to="/"
          style={linkStyle}
          aria-label="Ir a inicio"
          title="Ir a inicio"
        >
          InvoiceUp
        </Link>
      </h2>
      <ul>
        <li>
          <Link to="/dashboard" style={linkStyle}>
            Nueva factura
          </Link>
        </li>
        <li>
          <Link to="/my-invoices" style={linkStyle}>
            Mis facturas
          </Link>
        </li>
      </ul>
      <div>
        <p>userName</p>
        <img src={imageDeafult} alt="image usuario" />
      </div>
    </HeaderDashboardStyled>
  );
};
