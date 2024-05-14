import styled from "styled-components";

export const DashboardWrapper = styled.main`
  width: 100vw;
  height: auto;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.secondary} 100%
  );
`;
