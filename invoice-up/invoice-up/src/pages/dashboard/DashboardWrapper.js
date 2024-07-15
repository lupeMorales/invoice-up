import styled from "styled-components";

export const DashboardWrapper = styled.main`
  height: auto;
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.secondary} 100%
  );
  overflow: hidden;
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 50px;
  }
`;
