import { Heading } from "../molecules/Heading";
import styled from "styled-components";
import { TestimonialCard } from "../molecules/TestimonialCard";

const TestimonialWrapper = styled.div`
  display: flex;
  padding: 0 10% 80px 10%;

  div {
    display: flex;
  }
`;

export const TestimonialSection = (props) => {
  return (
    <TestimonialWrapper>
      <Heading
        align="start"
        title={props.title}
        subtitle={props.subtitle}
      ></Heading>

      <div>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        {/*   <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard> */}
      </div>
    </TestimonialWrapper>
  );
};