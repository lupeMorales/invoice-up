import { useState, useEffect } from "react";
import axios from "axios";
import { InvoiceInfoItemStyled } from "./InvoiceInfoItemStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
export const InvoiceInfoItem = () => {
  // Crear estados para el texto y el color
  const [text, setText] = useState("pendiente");
  const [color, setColor] = useState("red");
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener las facturas desde la API
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/invoices");
        setInvoices(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Llamar a la función de obtener facturas
    fetchInvoices();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar las facturas: {error.message}</p>;
  }

  // Función para manejar el clic
  const handleClick = () => {
    if (text === "pendiente") {
      setText("cobrado");
      setColor("green");
    } else {
      setText("pendiente");
      setColor("red");
    }
  };

  return (
    <div>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <InvoiceInfoItemStyled>
              <div className="container-info">
                <h2 className="invoice-number">{invoice.number_invoice}</h2>
                <h2>{invoice.client_name}</h2>
                <h2 className="invoice-date">{invoice.issue_date}</h2>
                <h2>importe</h2>
                <h2
                  title='cambia el estado de la factura a "cobrado"'
                  style={{
                    backgroundColor: color,
                    padding: "5px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  {text}
                </h2>
              </div>

              <div className="container-edit">
                <button className="button-info" title="ver detalle">
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="button-info" title="editar">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="button-danger" title="eliminar factura">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </InvoiceInfoItemStyled>
          </li>
        ))}
      </ul>
    </div>
  );
};
