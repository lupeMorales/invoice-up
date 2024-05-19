import { useState } from "react";
import { DashboardFormStyled } from "./DashboardFormStyled";
import { Button } from "../../atoms/buttons/Button";
import GetAvatar from "../../atoms/getAvatar/GetAvatar";
import avatar from "../../../assets/avatar.webp";
import { GetAvatarStyled } from "../../atoms/getAvatar/GetAvatarStyled";

export const DashboardForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    myName: "",
    myAddress: "",
    myPhone: "",
    myEmail: "",
    myCif: "",
    iva: "",
    irpf: "",
    issueDate: "",
    expirationDate: "",
    service: "",
    quantity: "",
    price: "",
    id: "",
    clientName: "",
    clientAddress: "",
    clientPhone: "",
    clientMail: "",
    clientCif: "",
    template: "classic",
    logo: "",
  });

  const handleChange = (ev) => {
    // Actualiza el estado de 'form' con el valor del campo de entrada
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const updateAvatar = (avatar) => {
    setForm({
      ...form,
      logo: avatar,
    });
  };

  //send data to dashboard
  const handleSubmit = (ev) => {
    ev.preventDefault();
    //** OJO ** hay que hacer comprovación si falta algún input por rellenar
    // validaciones
    // call to backend
    onSubmit(form);
    //volver al estado inicial del formurario
    // resetForm();
  };

  return (
    <DashboardFormStyled onSubmit={handleSubmit}>
      <fieldset>
        <legend>Elige diseño</legend>

        <div className="desing">
          <div>
            <input
              className="inputRadio"
              type="radio"
              name="template"
              id="classic"
              value="classic"
              checked={form.template === "classic"}
              onChange={handleChange}
            />
            <label htmlFor="Classic" className="labelRadio">
              Clásico
            </label>
          </div>
          <div>
            {" "}
            <input
              className="inputRadio"
              type="radio"
              name="template"
              id="moderno"
              value="moderno"
              checked={form.template === "wave"}
              onChange={handleChange}
            />
            <label htmlFor="Moderno" className="labelRadio">
              Moderno
            </label>
          </div>

          <div>
            {" "}
            <input
              className="inputRadio"
              type="radio"
              name="template"
              id="minimal"
              value="minimal"
              checked={form.template === "minimal"}
              onChange={handleChange}
            />
            <label htmlFor="Minimal" className="labelRadio">
              Minimal
            </label>
          </div>
        </div>
        <GetAvatar avatar={form.Logo} updateAvatar={updateAvatar}></GetAvatar>
      </fieldset>

      <fieldset>
        <legend>Datos de emisor</legend>
        <input
          type="text"
          name="myName"
          id="myName"
          placeholder="nombre de emisor"
          value={form.myName}
          onChange={handleChange}
          aria-label="nombre del emisor"
        />
        <input
          type="text"
          name="myAddress"
          id="myAddress"
          placeholder="dirección"
          value={form.myAddress}
          onChange={handleChange}
          aria-label="dirección del emisor"
        />
        <div className="input-group">
          <input
            type="number"
            name="myPhone"
            id="myPhone"
            placeholder="Teléfono"
            value={form.myPhone}
            onChange={handleChange}
            aria-label="teléfono del emisor"
          />
          <input
            type="text"
            name="myCif"
            id="myCif"
            placeholder="cif"
            value={form.myCif}
            onChange={handleChange}
            aria-label="cif del emisor"
          />
        </div>

        <input
          type="myEmail"
          name="myEmail"
          id="email"
          placeholder="tuemail@rmail.com"
          value={form.myEmail}
          onChange={handleChange}
          aria-label="email del emisor"
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
          name="clientAddress"
          id="clientAddress"
          placeholder="dirección"
          value={form.clientAddress}
          onChange={handleChange}
          aria-label="dirección del cliente"
        />
        <div className="input-group">
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
            name="clientCif"
            id="clientCif"
            placeholder="cif"
            value={form.clientCif}
            onChange={handleChange}
            aria-label="cif del cliente"
          />
        </div>

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
          <label htmlFor="issueDate">
            <p>Fecha de emisión</p>
            <input
              type="date"
              name="issueDate"
              id="issueDate"
              placeholder="fecha de emisión"
              value={form.issueDate}
              onChange={handleChange}
              aria-label="fecha de emisión de factura"
            />
          </label>
          <label htmlFor="expirationDate">
            <p>Fecha de vencimiento</p>
            <input
              type="date"
              name="expirationDate"
              id="expirationDate"
              placeholder="fecha de vencimiento"
              value={form.expirationDate}
              onChange={handleChange}
              aria-label="fecha de vencimietno de factura"
            />
          </label>
        </div>

        <input
          type="number"
          name="id"
          id="id"
          placeholder="numero de factura"
          value={form.id}
          onChange={handleChange}
          aria-label="número de factura"
        />
      </fieldset>

      <Button>enviar</Button>
    </DashboardFormStyled>
  );
};
