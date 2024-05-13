import { useState } from "react";
import { useEffect } from "react";
import { CalculatorStyled } from "./CalculatorStyled";
import { ButtonInfo } from "../../components/atoms/buttons/ButtonInfo";
import { ModalInfo } from "../../components/atoms/modal/ModalInfo.jsx";

export const Calculator = () => {
  //modal logic

  const [showModal, setShowModal] = useState(false);

  const openModal = (ev) => {
    ev.preventDefault();
    console.log("hello!");
    setShowModal((prev) => !prev);
  };

  // ejecuta la función cada vez que se actualiza la constande de estado
  useEffect(() => {
    calculateResult(), [formData];
  });

  const [formData, setFormData] = useState({
    taxBase: "€",
    iva: "",
    irpf: "",
  });

  const [price, setPrice] = useState(0);
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [totalToReceive, setTotalToReceive] = useState(0);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onlyNumberAllow = (ev) => {
    if (isNaN(ev.key) && ev.key !== "Backspace" && ev.key !== "Enter") {
      ev.preventDefault();
    }
  };

  const calculate = (percentage) =>
    percentage * (parseInt(formData.taxBase) / 100);

  const calculateResult = () => {
    const ivaAmount = calculate(parseInt(formData.iva));
    const irpfAmount = calculate(parseInt(formData.irpf));
    const baseAmount = parseInt(formData.taxBase);

    setPrice((baseAmount + ivaAmount).toFixed(2));
    setTotalInvoice((baseAmount + ivaAmount - irpfAmount).toFixed(2));
    setTotalToReceive((baseAmount - irpfAmount).toFixed(2));

    console.log("calculate");
    console.log("irpfAmount", irpfAmount);
    console.log("formData irpf", formData.irpf);
    console.log("ivaAmount", ivaAmount);
    console.log("formData iva", formData.iva);
    console.log("baseAmount", baseAmount);
    console.log("form taxbase", formData.taxBase);
  };

  return (
    <>
      {" "}
      <CalculatorStyled>
        <form>
          <h2>Rellena los datos y obtén el importe final de tu factura</h2>
          <fieldset>
            <label>Base imponible (€)</label>
            <input
              type="text"
              id="taxBase"
              name="taxBase"
              value={formData.taxBase}
              onChange={handleChange}
              onKeyDown={onlyNumberAllow}
            />
          </fieldset>

          <fieldset>
            <label>Impuestos</label>
            <div>
              <input type="radio" id="iva" checked="checked" />
              <label htmlFor="iva">IVA (%)</label>

              <input
                type="number"
                id="iva"
                name="iva"
                value={formData.iva}
                max={21}
                min={0}
                title="Indica el IVA"
                onChange={handleChange}
              />
              <p>{calculate(formData.iva)}€</p>
              <ButtonInfo onClick={openModal}></ButtonInfo>
              <ModalInfo
                showModal={showModal}
                setShowModal={setShowModal}
              ></ModalInfo>
            </div>
            <div>
              <input type="radio" id="irpf" checked="checked" />
              <label htmlFor="irpf">IRPF (%)</label>
              <input
                type="number"
                id="irpf"
                name="irpf"
                value={formData.irpf}
                max={15}
                min={0}
                title="Indica el IRPF"
                onChange={handleChange}
              />
              <p>{calculate(formData.irpf)}€</p>
            </div>
          </fieldset>
        </form>

        <section>
          <div>
            <p>Precio con IVA:</p>
            <p>{price}€</p>

            <p>TOTAL FACTURA:</p>
            <p>{totalInvoice}€</p>
          </div>

          <div>
            <p>Neto sin IVA:</p>
            <p>{totalToReceive}€</p>
          </div>
        </section>
      </CalculatorStyled>
    </>
  );
};
