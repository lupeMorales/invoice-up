import { MyInvoicesWrapperStyled } from "./MyInvoicesWrapperStyled";
import { InvoiceInfoItem } from "../../components/molecules/invoicesInfo/InvoiceInfoItem";

export const MyInvoicesWrapper = () => {
  return (
    <MyInvoicesWrapperStyled>
      <InvoiceInfoItem></InvoiceInfoItem>
      <InvoiceInfoItem></InvoiceInfoItem>
      <InvoiceInfoItem></InvoiceInfoItem>
      <InvoiceInfoItem></InvoiceInfoItem>
    </MyInvoicesWrapperStyled>
  );
};
