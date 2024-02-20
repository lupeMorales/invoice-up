import { Heading } from "../molecules/Heading";
import { TestimonialCard } from "../molecules/TestimonialCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px 0;
`;

export const TestimonialSection = () => {
  return (
    <Wrapper>
      <Heading></Heading>
      <ul>
        <TestimonialCard></TestimonialCard>
      </ul>
    </Wrapper>
  );
};
