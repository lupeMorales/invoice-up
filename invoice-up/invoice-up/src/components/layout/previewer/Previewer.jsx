import { useState } from "react";
import { InvoiceClasic } from "../invoice/InvoiceClasic";
import { InvoiceMinimal } from "../invoice/InvoiceMinimal";
import { PreviewerStyled } from "./PreviewerStyled";

// eslint-disable-next-line react/prop-types

export const Previewer = ({ dataForm }) => {
  //dataForm has been sended by dashboard
  const [template, setTemplate] = useState(<InvoiceClasic></InvoiceClasic>);
  console.log("dataForm", dataForm);
  console.log("nombre del emisor", dataForm.myName);
  console.log("template", dataForm.template);

  return (
    <PreviewerStyled>
      <h2>soy el preview</h2>
      <p> {dataForm.myName || `Nombre Apellido`}</p>
      <p> {dataForm.myPhone || "615454545"}</p>

      {dataForm.template === "classic" && <p> etse es el template classic</p>}

      {dataForm.template === "classic" && <InvoiceClasic></InvoiceClasic>}
      {dataForm.template === "minimal" && (
        <InvoiceMinimal dataForm={dataForm}></InvoiceMinimal>
      )}
    </PreviewerStyled>
  );
};
