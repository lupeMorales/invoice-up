import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../../atoms/buttons/Button";
import { InvoiceInfoItemStyled } from "./InvoiceInfoItemStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";

export const InvoiceInfoItem = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [invoiceStates, setInvoiceStates] = useState({});

  const [filterStatus, setFilterStatus] = useState("all");

  const handleFilterStatus = (status) => {
    setFilterStatus(status);
  };

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/invoices");
        setInvoices(response.data);
        setLoading(false);

        // Inicializar invoiceStates con el estado inicial de cada factura
        const initialStates = {};
        response.data.forEach((invoice) => {
          initialStates[invoice.id] = {
            text: invoice.paid ? "cobrada" : "pendiente",
            color: invoice.paid ? "green" : "red",
          };
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

  // calcula el importe total de la factura

  const calculateTotalAmount = (invoices) => {
    const subtotal = invoices.price * invoices.quantity;
    return (
      subtotal +
      (subtotal * invoices.iva) / 100 -
      (subtotal * invoices.irpf) / 100
    );
  };
  // cambia el estado de la factura de pendiente a cog¡brada
  const handleMarkAsPaid = async (numberInvoice) => {
    try {
      // Actualizar el estado de la factura en el backend
      await axios.put(
        `http://127.0.0.1:8000/api/invoices/${numberInvoice}/mark-as-paid`
      );

      // Actualizar el estado local del componente
      setInvoiceStates((prevStates) => {
        const updatedStates = { ...prevStates };
        Object.keys(prevStates).forEach((key) => {
          if (
            invoices.find((invoice) => invoice.number_invoice === key)
              ?.number_invoice === numberInvoice
          ) {
            updatedStates[key] = { text: "cobrado", color: "green" };
          }
        });
        return updatedStates;
      });
    } catch (error) {
      console.error("Error al marcar la factura como cobrado:", error);
    }
  };

  // elimina la factura
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
      <div style={{ display: "flex", gap: "7px" }}>
        <Button
          variant="outline"
          action="Todas"
          onClick={() => handleFilterStatus("all")}
        ></Button>
        <Button
          action="Pendientes de cobro"
          onClick={() => handleFilterStatus("pending")}
        ></Button>
        <Button
          action="Cobradas"
          onClick={() => handleFilterStatus("paid")}
        ></Button>
      </div>

      <ul style={{ listStyle: "none", marginTop: "55px" }}>
        {invoices
          .filter((invoice) => {
            if (filterStatus === "all") {
              return true;
            } else if (filterStatus === "pending") {
              return invoiceStates[invoice.id].text === "pendiente";
            } else if (filterStatus === "paid") {
              return invoiceStates[invoice.id].text === "cobrada";
            }
            return false;
          })
          .map((invoice) => (
            <li key={invoice.id}>
              <InvoiceInfoItemStyled>
                <div className="container-info">
                  <h2 className="invoice-number">{invoice.number_invoice}</h2>
                  <h2>{invoice.client_name}</h2>
                  <h2 className="invoice-date">{invoice.issue_date}</h2>
                  <h2>{calculateTotalAmount(invoice)}€</h2>

                  <h2
                    className="button-info"
                    title="Marcar como cobrada"
                    onClick={() => {
                      handleMarkAsPaid(invoice.number_invoice);
                      setInvoiceStates((prevStates) => {
                        const updatedStates = { ...prevStates };
                        updatedStates[invoice.id] = {
                          text: "cobrada",
                          color: "green",
                        };
                        return updatedStates;
                      });
                    }}
                    style={{
                      padding: "5px 10px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      backgroundColor: invoiceStates[invoice.id].color,
                      color: "white",
                    }}
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
