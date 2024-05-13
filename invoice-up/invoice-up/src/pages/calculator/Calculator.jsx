import { useState } from "react";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { CalculatorStyled } from "./CalculatorStyled";
import { ButtonInfo } from "../../components/atoms/buttons/ButtonInfo";
import styled from "styled-components";

// Estilos del Tooltip
const Category = styled.th`
  font-family: ${(props) => props.theme.fonts.titleFont};
  color: ${(props) => props.theme.color.primary};
  padding-bottom: 20px;

  font-size: ${(props) => props.theme.fontSizes.small};
`;
const Cell = styled.td`
  text-align: ${(props) => (props.align === "start" ? "start" : "center")};
  padding: 10px 20px;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => props.theme.color.darl_text};
`;
const Title = styled.caption`
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.titleFont};
  color: ${(props) => props.theme.color.primary};
  text-align: center;
`;
const Table = styled.table`
  padding: 4rem 2rem;
`;

export const Calculator = () => {
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
      ev.prevenDataefault();
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
              <ButtonInfo data-tooltip-id="tooltipIva"></ButtonInfo>
              <Tooltip id="tooltipIva" variant="light">
                <Table>
                  <Title>Tipos impositivos en el IVA</Title>

                  <tr>
                    <Category>Tipo </Category>
                    <Category>% </Category>
                    <Category>Tipo de bienes</Category>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>21%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>10%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>4%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>0%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>7%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>3%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>9,5%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                </Table>
              </Tooltip>
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
              <ButtonInfo data-tooltip-id="tooltipIRPF"></ButtonInfo>
              <Tooltip id="tooltipIRPF" variant="light">
                <Table>
                  <Title>Tipos impositivos en el IVA</Title>

                  <tr>
                    <Category>Tipo </Category>
                    <Category>% </Category>
                    <Category>Tipo de bienes</Category>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>21%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>10%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>4%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>0%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>7%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>3%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>9,5%</Cell>
                    <Cell>
                      La marotía de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                </Table>
              </Tooltip>
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
