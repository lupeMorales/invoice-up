import React from "react";
import styled from "styled-components";

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 0 20px 0;

  h2 {
    width: 360px;
    text-align: center;
    padding-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.color.darl_text};
  }

  p {
    width: 500px;
    text-align: center;
    padding-bottom: 40px;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.darl_text};
  }
  hr {
    width: 80px;
    border: 3px solid ${(props) => props.theme.color.accent};
    border-radius: 5px;
  }
`;

export const Heading = (props) => {
  return (
    <HeadingWrapper>
      <h2> {props.title} </h2>
      <p> {props.subtitle} </p>
      <hr />
    </HeadingWrapper>
  );
};
