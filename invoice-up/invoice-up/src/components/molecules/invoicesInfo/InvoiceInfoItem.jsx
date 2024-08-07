import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../../atoms/buttons/Button";
import { InvoiceInfoItemStyled } from "./InvoiceInfoItemStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { ModalInvoiceStyled } from "../../atoms/modal/ModalInvoiceStyled";
import { ModalStyled } from "../../atoms/modal/ModalStyled";
import { Previewer } from "../../layout/previewer/Previewer";

export const InvoiceInfoItem = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [invoiceStates, setInvoiceStates] = useState({});
  const [hasPendingInvoices, setHasPendingInvoices] = useState(true);
  const [hasPaidInvoices, setHasPaidInvoices] = useState(true);

  const [filterStatus, setFilterStatus] = useState("all");

  const handleFilterStatus = (status) => {
    setFilterStatus(status);
    const pendingInvoices = invoices.filter((invoice) => !invoice.paid);
    setHasPendingInvoices(pendingInvoices.length > 0);
    const paidInvoices = invoices.filter((invoice) => invoice.paid);
    setHasPaidInvoices(pendingInvoices.length > 0);
  };

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get(
          "https://guadalupe.v1-22.proyectosdwa.es/api2/public/api/invoices"
        );
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
        `https://guadalupe.v1-22.proyectosdwa.es/api2/public/api/invoices/${numberInvoice}/mark-as-paid`
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

  // imprime  factura a PDF
  const handlePrintPdf = (invoice) => {
    const element = document.querySelector(".invoice-container");
    html2pdf().from(element).save(`factura-${invoice.number_invoice}.pdf`);
  };

  // editar factura
  const handleEditInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setShowEditModal(true);
  };

  // elimina la factura
  const handleDelete = async (number_invoice) => {
    try {
      await axios.delete(
        `https://guadalupe.v1-22.proyectosdwa.es/api2/public/api/invoices/${number_invoice}`
      );
      // Eliminar la factura del estado
      setInvoices((prevInvoices) =>
        prevInvoices.filter(
          (invoice) => invoice.number_invoice !== number_invoice
        )
      );
    } catch (error) {}

    // Maneja el evento de mostrar el modal con la factura seleccionada
    const handleShowModal = (invoice) => {
      setSelectedInvoice(invoice);
      setShowModal(true);
    };

    return (
      <div>
        <div style={{ display: "flex", gap: "7px", padding: "2px" }}>
          <Button
            variant="outline"
            action="Todas"
            onClick={() => handleFilterStatus("all")}
          ></Button>
          <Button
            style={{ padding: "8px" }}
            action="Pendientes de cobro"
            onClick={() => handleFilterStatus("pending")}
          ></Button>
          <Button
            style={{ padding: "8px" }}
            action="Cobradas"
            onClick={() => handleFilterStatus("paid")}
          ></Button>
        </div>

        {filterStatus === "pending" && !hasPendingInvoices && (
          <p style={{ fontSize: "1.9em", padding: "40px 20px" }}>
            No hay facturas pendientes
          </p>
        )}
        {filterStatus === "paid" && !hasPaidInvoices && (
          <p style={{ fontSize: "1.9em", padding: "40px 20px" }}>
            No hay facturas cobradas
          </p>
        )}

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
                    <button
                      className="button-info"
                      title="ver detalle"
                      onClick={() => handleShowModal(invoice)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      className="button-info"
                      title="editar"
                      onClick={() => handleEditInvoice(invoice)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="button-info"
                      title="Imprimir PDF"
                      onClick={() => handlePrintPdf(invoice)}
                    >
                      <FontAwesomeIcon icon={faPrint} />
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

        {showModal && selectedInvoice && (
          <ModalInvoiceStyled show={showModal}>
            <div className="modal-content">
              <span
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                &times;
              </span>
              <Previewer dataForm={selectedInvoice} />
            </div>
          </ModalInvoiceStyled>
        )}
        {showEditModal && selectedInvoice && (
          <ModalStyled show={showEditModal}>
            <div className="modal-content">
              <span
                className="close-button"
                onClick={() => setShowEditModal(false)}
              >
                &times;
              </span>
              <h2>Lo sentimos mucho :(</h2>
              <p>
                La función de editar facturas se encuentra temporalmente fuera
                de servicio.
              </p>
            </div>
          </ModalStyled>
        )}
      </div>
    );
  };
};
