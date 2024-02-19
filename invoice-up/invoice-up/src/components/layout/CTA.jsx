import React from "react";
import styled from "styled-components";
import { Heading } from "../molecules/Heading";
import { Button } from "../atoms/Button";
import {
  DiagonalSparator,
  DiagonalSparatorUp,
} from "../atoms/DiagonalSeparator";

const StyledCTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%
  height: auto;
 background-image: linear-gradient(to bottom, #fff, ${(props) =>
   props.theme.color.light_accent} 100%);

  
  Button {
    margin: 40px 10px 250px 10px;
 
  }

 
`;
export const CTA = (props) => {
  return (
    <>
      <StyledCTA>
        <DiagonalSparatorUp></DiagonalSparatorUp>
        <Heading title={props.title} subtitle={props.subtitle}></Heading>
        <div>
          <Button>Comienza a facturar</Button>
          <Button variant="outline">Comienza a facturar</Button>
        </div>

        <DiagonalSparator></DiagonalSparator>
      </StyledCTA>
    </>
  );
};
