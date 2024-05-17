import { useState } from "react";
import { DatosDelEmisor } from "./DatosDelEmisor";

export const FormularioDatosParaFactura = (props) => {
  console.log(props);
  const [openSection, setOpenSection] = useState("emisor");
  return (
    <>
      <h2>Este es el formulario con los datos para crear la factura</h2>
      <form>
        <DatosDelEmisor
          handleCollapsable={props.handleCollapsable}
          dataInvoice={props.dataInvoice}
          classCollapsed={props.classCollapsed}
          handleChange={props.handleChange}
          isOpen={"emisor" === openSection}
          handleClickCollapsed={() => setOpenSection("emisor")}
        ></DatosDelEmisor>
        {/*  <DatosDelCliente></DatosDelCliente>
        <DatosDelServicio></DatosDelServicio> */}
      </form>
    </>
  );
};
