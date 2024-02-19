import React from "react";
import styled from "styled-components";
import { Heading } from "../molecules/Heading";
import { Button } from "../atoms/Button";

const InfoWrapper = styled.section`
  display: flex;
  /*   flex-direction: row; */
  flex-direction: ${(props) =>
    props.direction === "reverse" ? "row-reverse" : "row"};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10rem;

  p {
    font-size: ${(props) => props.theme.fontSizes.small};
    padding-bottom: 40px;
  }

  img {
    width: 100%;
    max-width: 550px;
    object-fit: fill;
  }

  div {
    max-width: 500px;
  }
`;

export const InfoSection = (props) => {
  return (
    <InfoWrapper>
      <img src={props.image} alt={props.alt} />
      <div>
        <Heading title={props.title} subtitle={props.subtitle}></Heading>
        <p> {props.text} </p>
        <Button> Comenzar ahora </Button>
      </div>
    </InfoWrapper>
  );
};
3;
