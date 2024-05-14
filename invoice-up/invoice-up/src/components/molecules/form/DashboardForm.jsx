import { useState } from "react";
import { DashboardFormStyled } from "./DashboardFormStyled";
import { Button } from "../../atoms/buttons/Button";

export const DashboardForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
    cif: "",
    iva: "",
    irpf: "",
    date: "",
    service: "",
    quantity: "",
    price: "",
    id: "",
    clientName: "",
    clientAddress: "",
    clientPhone: "",
    clientMail: "",
    clientCif: "",
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //send data to dashboard
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(form);
  };

  return (
    <DashboardFormStyled onSubmit={handleSubmit}>
      <fieldset>
        <legend>Datos de emisor</legend>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="nombre de emisor"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cif"
          id="cif"
          placeholder="cif"
          value={form.cif}
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Teléfono"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="adress"
          id="adress"
          placeholder="dirección"
          value={form.adress}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="tuemail@rmail.com"
          value={form.email}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Datos del cliente</legend>
        <input
          type="text"
          name="clientName"
          id="clientName"
          placeholder="nombre de cliente"
          value={form.clientName}
          onChange={handleChange}
          aria-label="nombre de cliente"
        />
        <input
          type="text"
          name="clientCif"
          id="clientCif"
          placeholder="cif"
          value={form.clientCif}
          onChange={handleChange}
          aria-label="cif del cliente"
        />
        <input
          type="number"
          name="clientPhone"
          id="clientPhone"
          placeholder="Teléfono"
          value={form.clientPhone}
          onChange={handleChange}
          aria-label="teléfono del cliente"
        />
        <input
          type="text"
          name="clientAddress"
          id="clientAddress"
          placeholder="dirección"
          value={form.clientAddress}
          onChange={handleChange}
          aria-label="dirección del cliente"
        />
        <input
          type="email"
          name="clientMail"
          id="clientMail"
          placeholder="emaildelcliente@mail.com"
          value={form.clientMail}
          onChange={handleChange}
          aria-label="email del cliente"
        />
      </fieldset>
      <fieldset>
        <legend>Datos de servicio</legend>
        <input
          type="text"
          name="service"
          id="service"
          placeholder="servicio"
          value={form.service}
          onChange={handleChange}
        />
        <div className="input-group">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="importe"
            value={form.price}
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            id="quuantity"
            placeholder="cantidad"
            value={form.quantity}
            onChange={handleChange}
            aria-label="cantidad"
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            name="iva"
            id="iva"
            placeholder="iva"
            value={form.iva}
            onChange={handleChange}
            aria-label="porcentage de IVA"
          />
          <input
            type="number"
            name="irpf"
            id="irpf"
            placeholder="irpf"
            value={form.irpf}
            onChange={handleChange}
            aria-label="porcentage de IRPF"
          />
        </div>
        <div className="input-group">
          <input
            type="date"
            name="date"
            id="date"
            placeholder="fecha"
            value={form.date}
            onChange={handleChange}
            aria-label="fecha de emisión de factura"
          />
          <input
            type="number"
            name="id"
            id="id"
            placeholder="numero de factura"
            value={form.id}
            onChange={handleChange}
            aria-label="número de factura"
          />
        </div>
      </fieldset>

      <Button>enviar</Button>
    </DashboardFormStyled>
  );
};
