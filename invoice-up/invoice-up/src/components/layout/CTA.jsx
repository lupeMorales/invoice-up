import styled from "styled-components";
import { Heading } from "../molecules/Heading";
import { Button } from "../atoms/buttons/Button";
import {
  DiagonalSparator,
  DiagonalSparatorUp,
} from "../atoms/DiagonalSeparator";

const StyledCTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  background-image: linear-gradient(
    to bottom,
    #fff,
    ${(props) => props.theme.color.light_accent} 100%
  );

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
          <Button action="Calculadora de Autónomos"></Button>
          <Button variant="outline" action="Comienza a facturar"></Button>
        </div>

        <DiagonalSparator></DiagonalSparator>
      </StyledCTA>
    </>
  );
};
