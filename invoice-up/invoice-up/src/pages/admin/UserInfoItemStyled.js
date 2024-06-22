import styled from "styled-components";

export const UserInfoItemStyled = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.color.primary};
  border: solid 2px ${(props) => props.theme.color.accent};
  font-family: ${(props) => props.theme.fonts.titleFont};
  font-size: 1, 6em;
  color: ${(props) => props.theme.color.grey};
  border-radius: 20px;

  &:hover {
    background-color: ${(props) => props.theme.color.secondary};
  }
`;
