import { useState, useEffect } from "react";
import axios from "axios";
import { InvoiceInfoItemStyled } from "./InvoiceInfoItemStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
export const InvoiceInfoItem = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [invoiceStates, setInvoiceStates] = useState({});

  // llamo a la API para obtener las facturas
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/invoices");
        setInvoices(response.data);
        setLoading(false);

        // Inicializar invoiceStates con el estado inicial de cada factura
        const initialStates = {};
        response.data.forEach((invoice) => {
          initialStates[invoice.id] = { text: "pendiente", color: "red" };
        });
        setInvoiceStates(initialStates);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar las facturas: {error.message}</p>;
  }
  // al clickar cambio el estado de la factura (solo visualmente)
  // ojo cuidao!! añade funcionalidad para editar el estado en bbdd
  // modifica bbdd y envia pendind por default desde dashoboard
  const changeStatus = (id) => {
    const currentState = invoiceStates[id];
    const newState =
      currentState.text === "pendiente"
        ? { text: "cobrado", color: "green" }
        : { text: "pendiente", color: "red" };

    setInvoiceStates({
      ...invoiceStates,
      [id]: newState,
    });
  };

  // elimina factura
  const handleDelete = async (number_invoice) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/invoices/${number_invoice}`
      );
      // Eliminar la factura del estado
      setInvoices((prevInvoices) =>
        prevInvoices.filter(
          (invoice) => invoice.number_invoice !== number_invoice
        )
      );
    } catch (error) {
      console.error("Error al eliminar la factura:", error);
    }
  };

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
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
                    backgroundColor: invoiceStates[invoice.id].color,
                    padding: "5px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => changeStatus(invoice.id)}
                >
                  {invoiceStates[invoice.id].text}
                </h2>
              </div>

              <div className="container-edit">
                <button className="button-info" title="ver detalle">
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="button-info" title="editar">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="button-danger"
                  title="eliminar factura"
                  onClick={() => handleDelete(invoice.number_invoice)}
                >
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
