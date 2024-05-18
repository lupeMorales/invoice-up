import styled from "styled-components";
import { useState, useEffect } from "react";
import { FormularioDatosParaFactura } from "./FormularioDatosParaFactura";

const PruebaPageStyled = styled.main`
  padding: 50px;
`;

export const PruebaPage = () => {
  const [dataInvoice, setDataInvoice] = useState({
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
  });
  const [classCollapsed, setClassCollapsed] = useState("collapsed");
  const [isOpen, setIsOpen] = useState("emisor");

  useEffect(() => {
    ls.set("dataInvoice", dataInvoice);
  }, [dataInvoice]);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setDataInvoice({
      ...dataInvoice,
      [name]: value,
    });
  };

  const handleCollapsable = (data) => {
    const menuClicked = data;
    descolapsar(menuClicked);
    console.log(menuClicked);
  };

  function descolapsar(id) {
    classCollapsed === "collapsed"
      ? setClassCollapsed("")
      : setClassCollapsed("collapsed");
  }
  const reset = () => {
    setDataInvoice({
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
    });
  };
  return (
    <PruebaPageStyled>
      <h1>Esto es una página para pruebas</h1>
      <p>
        Esta pantalla será como mi componente Dashboar. Lo que ponga aquí, lo
        podré extrapolar a dicho componente
      </p>
      <FormularioDatosParaFactura
        dataInvoice={dataInvoice}
        reset={reset}
        handleCollapsable={handleCollapsable}
        handleChange={handleChange}
        classCollapsed={classCollapsed}
        isOpen={isOpen}
      ></FormularioDatosParaFactura>
    </PruebaPageStyled>
  );
};
