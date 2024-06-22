import styled from "styled-components";

export const TeamSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 798px) {
    margin: 0 20px;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    gap: 30px;
    @media only screen and (max-width: 798px) {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
