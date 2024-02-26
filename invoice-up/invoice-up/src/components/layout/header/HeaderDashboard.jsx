import { HeaderDashboardStyled } from "./HeaderDashboardStyled";
import imageDeafult from "../../../assets/avatar.webp";

export const HeaderDashboard = () => {
  return (
    <HeaderDashboardStyled>
      <h2>InvoiceUp</h2>
      <ul>
        <li>Nueva factura</li>
        <li>Mis facturas</li>
      </ul>
      <div>
        <p>userName</p>
        <img src={imageDeafult} alt="image usuario" />
      </div>
    </HeaderDashboardStyled>
  );
};
