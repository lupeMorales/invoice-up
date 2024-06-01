import { InvoiceClasicStyled } from "./InvoiceClasicStyled";
import imageDeafult from "../../../assets/avatar.webp";
export const InvoiceMinimal = ({ dataForm }) => {
  const subtotal = dataForm.price * dataForm.quantity;
  return (
    <InvoiceClasicStyled>
      <h1>Soy la factura {dataForm.template}</h1>
      <div className="classic_companyDates">
        <div>
          <img
            src={dataForm.logo || imageDeafult}
            alt="logo de ${dataForm.myName}"
          />
        </div>
        <div>
          <h2>Nº Factura:{dataForm.numberInvoice}</h2>
          <h2>{dataForm.myName || ""} </h2>
          <p>{dataForm.myAddress}</p>
          <p>TELÉFONO:{dataForm.myPhone}</p>
          <p>CIF:{dataForm.myCif}</p>
          <p>EMAIL:{dataForm.myEmail}</p>
        </div>
      </div>
      <div className="classic_clientDates">
        <h2>Cliente:</h2>
        <p>{dataForm.clientName || ""}</p>
        <p>{dataForm.clientAddress}</p>
        <p>TELÉFONO:{dataForm.clientPhone}</p>
        <p>CIF:{dataForm.clientCif}</p>
        <p>EMAIL:{dataForm.clientMail}</p>
      </div>
      <div className="classic_services">
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
            <td>{dataForm.price}</td>
            <td>{subtotal}</td>
          </tr>
        </table>
        <div className="classic_totals">
          <p>TOTAL:{subtotal}</p>
          <p>
            Retenciones({dataForm.irpf}%):{subtotal}
          </p>
          <p>
            IVA({dataForm.iva}%):{subtotal}{" "}
          </p>
          <p>TOTAL DEVENGADO:</p>
        </div>
      </div>
    </InvoiceClasicStyled>
  );
};
