import { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
    cif: "",
    tax: "",
    date: "",
    service: "",
    price: "",
    name2: "",
    adress2: "",
    phone2: "",
    email2: "",
    cif2: "",
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
    <form onSubmit={handleSubmit}>
      <h2>Información</h2>
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
        <legend>Datos de servicio</legend>
        <input
          type="text"
          name="service"
          id="service"
          placeholder="servicio"
          value={form.service}
          onChange={handleChange}
        />
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
          name="tax"
          id="tax"
          placeholder="tax"
          value={form.tax}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="fecha"
          value={form.date}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Datos de empresa a la que facturo</legend>
        <input
          type="text"
          name="name2"
          id="name2"
          placeholder="nombre de  emisor"
          value={form.name2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cif2"
          id="cif2"
          placeholder="cif"
          value={form.cif2}
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone2"
          id="phone2"
          placeholder="Teléfono"
          value={form.phone2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="adress2"
          id="adress2"
          placeholder="dirección"
          value={form.adress2}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email2"
          id="email2"
          placeholder="tuemail@rmail.com"
          value={form.email2}
          onChange={handleChange}
        />
      </fieldset>
      <button>enviar</button>
    </form>
  );
};
