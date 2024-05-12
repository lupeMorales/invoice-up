import styled from "styled-components";

export const ButtonInfoStyled = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.light_text};
  border-radius: 50px;
  font-family: ${(props) => props.theme.fonts.titleFont};

  &:hover {
    background-color: ${(props) => props.theme.color.light_text};
    color: ${(props) => props.theme.color.primary};
  }
`;
