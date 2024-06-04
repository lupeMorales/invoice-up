import React from "react";
import { InvoiceInfoItem } from "../../components/molecules/invoicesInfo/InvoiceInfoItem";
import { HeaderDashboard } from "../../components/layout/header/HeaderDashboard";
import { MyInvoicesWrapper } from "./MyInvoicesWrapper";

export const MyInvoices = () => {
  return (
    <>
      <HeaderDashboard></HeaderDashboard>
      <MyInvoicesWrapper></MyInvoicesWrapper>
    </>
  );
};
