import styled from "styled-components";

export const PreviewerStyled = styled.div`
  width: 600px;
  min-width: 320px;
  height: 800px;
  padding: 40px;
  background-color: ${(props) => props.theme.color.light_text};

  box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
`;
