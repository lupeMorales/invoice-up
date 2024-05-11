import { useState } from "react";
import { CalculatorStyled } from "./CalculatorStyled";

export const Calculator = () => {
  const [formData, setFormData] = useState({
    taxBase: "",
    iva: "",
    irpf: "",
  });

  const [formIsSend, setFormIsSend] = useState(false);

  const [iva, setIva] = useState(0);
  const [irpf, setIrpf] = useState(0);
  const [taxBase, setTaxBase] = useState(0);

  const [price, setPrice] = useState(0);
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [totalToReceive, setTotalToReceive] = useState(0);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("no misiela");
    calculateResult();
  };

  const onlyNumberAllow = (ev) => {
    if (isNaN(ev.key) && ev.key !== "Backspace" && ev.key !== "Enter") {
      ev.preventDefault();
    }
  };

  const calculate = (percentage) =>
    percentage * (parseInt(formData.taxBase) / 100);

  const calculateResult = () => {
    setIva(calculate(parseInt(formData.iva)));
    setIrpf(calculate(parseInt(formData.irpf)));
    setTaxBase(parseInt(formData.taxBase));

    setPrice((taxBase + iva).toFixed(2));
    setTotalInvoice((taxBase + iva - irpf).toFixed(2));
    setTotalToReceive((taxBase - irpf).toFixed(2));

    console.log("calculate");
    console.log("irpf", irpf);
    console.log("iva", iva);
    console.log("taxBase", taxBase);
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
              <label htmlFor="iva">
                IVA (%)
                {/*   <span>
                  <a
                    href="https://centregestor.es/que-tipo-de-iva-debo-aplicar/#:~:text=Tanto%20si%20usted%20es%20el,%25)%20es%20el%20que%20corresponde."
                    target="_blank"
                    title="info"
                  >
                    <img src="./assets/images/vectorInfo.png" alt="info icon" />
                  </a>{" "}
                </span> */}
              </label>
              <input
                type="number"
                id="iva"
                name="iva"
                value={formData.iva}
                //  placeholder="21"
                max={21}
                min={0}
                title="Indica el IVA"
                onChange={handleChange}
              />
              <p>{calculate(formData.iva)}€</p>
            </div>
            <div>
              <input type="radio" id="irpf" checked="checked" />
              <label htmlFor="irpf">
                IRPF (%)
                {/*        <span>
                  <a
                    href="https://www.infoautonomos.com/fiscalidad/irpf-autonomo/"
                    target="_blank"
                    title="info"
                  >
                    <img src="./assets/images/vectorInfo.png" alt="info icon" />
                  </a>{" "}
                </span> */}
              </label>
              <input
                type="number"
                id="irpf"
                name="irpf"
                //  placeholder="15"
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

            <p>IMPORTE TOTAL FACTURA:</p>
            <p>{totalInvoice}€</p>
          </div>

          <div>
            <p>Lo que me llevo:</p>
            <p>{totalToReceive}€</p>
          </div>
        </section>
      </CalculatorStyled>
    </>
  );
};
