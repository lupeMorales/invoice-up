import React, { useEffect, useState } from "react";
import axios from "axios";
import InvoiceInfoItem from "./InvoiceInfoItem"; // Asegúrate de que la ruta sea correcta

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

/*   useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/invoices");
        setInvoices(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }; */

    fetchInvoices();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Lista de Facturas</h1>
      <ul>
        {invoices.map((invoice) => (
          <InvoiceInfoItem key={invoice.id} invoice={invoice} />
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
