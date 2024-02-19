import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.variant === "outline" ? "fff" : `${props.theme.color.accent}`};
  color: ${(props) =>
    props.variant === "outline" ? `${props.theme.color.accent}` : "#fff"};
  border: 2px solid ${(props) => props.theme.color.accent};
  border-radius: 50px;
  font-family: ${(props) => props.theme.fonts.titleFont};

  &:hover {
    background-color: ${(props) => props.theme.color.dark_accent};
    border: 2px solid ${(props) => props.theme.color.dark_accent};
  }
`;
import React from "react";

export const Button = (props) => {
  return <StyledButton> {props.action}</StyledButton>;
};
