import { InvoiceModernStyled } from "./InvoiceModernStyled";
import imageDefault from "../../../assets/avatar.webp";

export const InvoiceModern = ({ dataForm }) => {
  const subtotal = dataForm.price * dataForm.quantity;
  // Check if dataForm.logo is a File object and generate a URL if necessary

  const logoUrl =
    dataForm.logo instanceof File
      ? URL.createObjectURL(dataForm.logo)
      : dataForm.logo || imageDefault;

  return (
    <InvoiceModernStyled>
      <h1>Soy la factura de estilo {dataForm.template}</h1>
      <div className="modern_heading">
        <div>
          <img src={logoUrl} alt={`logo de ${dataForm.company_name}`} />
        </div>
        <div>
          <h2>Nº Factura:{dataForm.number_invoice}</h2>
          <h2>Fecha: {dataForm.issue_date}</h2>
        </div>
      </div>
      <div className="modern_dates">
        <div>
          <h2>Cliente:</h2>
          <p>{dataForm.client_name || ""}</p>
          <p>{dataForm.client_address}</p>
          <p>TELÉFONO:{dataForm.client_phone}</p>
          <p>CIF:{dataForm.client_cif}</p>
          <p>EMAIL:{dataForm.client_mail}</p>
        </div>
        <div>
          <h2>{dataForm.company_name || "Company"} </h2>
          <p>{dataForm.company_address}</p>
          <p>TELÉFONO:{dataForm.company_phone}</p>
          <p>CIF:{dataForm.company_cif}</p>
          <p>EMAIL:{dataForm.company_mail}</p>
        </div>
      </div>
      <div className="modern_services">
        <table>
          <tr>
            <th>Concepto</th>
            <th>Cant.</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>{dataForm.service}</td>
            <td>{dataForm.quantity}</td>
            <td>{dataForm.price}€</td>
            <td>{subtotal}€</td>
          </tr>
        </table>
        <div className="modern_totals">
          <p>TOTAL:{subtotal}€</p>
          <p>
            Retenciones({dataForm.irpf}%):{subtotal}€
          </p>
          <p>
            IVA({dataForm.iva}%):{subtotal}€{" "}
          </p>
          <p>TOTAL DEVENGADO:€</p>
        </div>
      </div>
    </InvoiceModernStyled>
  );
};
