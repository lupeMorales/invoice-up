import styled from "styled-components";

export const InvoiceMinimalStyled = styled.main`
  position: relative;
  height: 100%;
  padding: 10%;

  .minimal_heading {
    padding: 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .minimal_dates {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-top: 20px;

    div:nth-child(2),
    div:nth-child(1) {
      padding-left: 20px;
      width: 250px;
    }
  }
  .minimal_services {
    margin-top: 40px;
    height: 300px;
    border-bottom: 2px solid ${(props) => props.theme.color.primary};
    table {
      width: 100%;
      font-size: 1.4rem;
    }
    th {
      height: 12px;
      padding: 10px;
      border-bottom: 1px solid ${(props) => props.theme.color.primary};
      font-size: 1.4rem;
    }
    td {
      height: 22px;
      padding: 10px;
      text-align: end;
      font-size: 1.4rem;
    }
  }
  .minimal_totals {
    line-height: 20px;
    text-align: end;
    padding: 10px;
    font-size: 1.2rem;
    position: absolute;
    right: 10%;
    bottom: 10%;
    width: 200px;
    margin-top: 10px;
  }
  p,
  h2 {
    line-height: 1.8;
  }
`;
