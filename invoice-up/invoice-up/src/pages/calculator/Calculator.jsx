import { CalculatorStyled } from "./CalculatorStyled";

export const Calculator = () => {
  return (
    <>
      {" "}
      <CalculatorStyled>
        <form>
          <h2>Rellena los datos y obtén el importe final de tu factura</h2>
          <fieldset>
            <label>Base imponible (€)</label>
            <input type="text" id="tax-base" />
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
                value="21"
                max="21"
                min="0"
                title="Indica el IVA"
              />
              <p>0,00 €</p>
            </div>
            <div>
              <input type="radio" id="irpf" checked="checked" class="radio" />
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
                value="15"
                max="15"
                min="0"
                title="Indica el IRPF"
              />
              <p>0,00 €</p>
            </div>
          </fieldset>
        </form>

        <section>
          <div>
            <p>Precio con IVA:</p>
            <p>0,00 €</p>

            <p>IMPORTE TOTAL FACTURA:</p>
            <p>0,00 €</p>
          </div>

          <div>
            <p>Lo que me llevo:</p>
            <p>0,00 €</p>
          </div>
        </section>
      </CalculatorStyled>
    </>
  );
};
