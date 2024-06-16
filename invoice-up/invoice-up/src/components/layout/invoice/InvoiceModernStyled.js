import styled from "styled-components";

export const InvoiceModernStyled = styled.main`
  position: relative;
  height: 100%;
  padding: 10%;

  .modern_heading {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .modern_dates {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    margin-top: 20px;

    div:nth-child(2),
    div:nth-child(1) {
      padding-left: 20px;
      width: 250px;
      border-right: 3px solid ${(props) => props.theme.color.primary};
    }
  }
  .modern_services {
    margin-top: 40px;
    height: 320px;
    table {
      width: 100%;
    }
    th {
      height: 12px;
      padding: 10px;
      background-color: ${(props) => props.theme.color.primary};
      font-size: 1.4rem;
    }
    td {
      height: 22px;
      padding: 10px;
      text-align: end;
      font-size: 1.4rem;
      border-bottom: 1px solid ${(props) => props.theme.color.light_primary};
    }
  }
  .modern_totals {
    line-height: 20px;
    text-align: end;
    padding: 10px;
    font-size: 1.2rem;
    position: absolute;
    right: 10%;
    bottom: 10%;
    width: 200px;
    margin-top: 10px;
    border-bottom: solid 3px ${(props) => props.theme.color.primary};
  }
  p,
  h2 {
    line-height: 1.8;
  }
`;
