import styled from "styled-components";

export const InvoiceClasicStyled = styled.main`
  position: relative;
  height: 100%;
  padding: 10%;

  .classic_companyDates {
    padding: 10px;
    border: solid 1px black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .classic_clientDates {
    padding: 10px;
    margin-top: 20px;
    border: solid 1px black;
  }
  .classic_services {
    margin-top: 20px;
    border: solid 1px black;
    height: 320px;
    table {
      width: 100%;
    }
    th {
      height: 22px;
      padding: 10px;
      background-color: ${(props) => props.theme.color.light_primary};
      font-size: 1.4rem;
    }
    td {
      height: 22px;
      padding: 10px;
      text-align: end;
      font-size: 1.4rem;
    }
  }
  .classic_totals {
    text-align: end;
    padding: 10px;
    font-size: 1.2rem;
    position: absolute;
    right: 10%;
    bottom: 10%;
    width: 200px;
    margin-top: 10px;
    border: solid 1px black;
  }
`;
