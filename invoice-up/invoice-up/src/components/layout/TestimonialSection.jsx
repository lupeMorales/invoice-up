import React from "react";
import { Heading } from "../molecules/Heading";
import { TestimonialCard } from "../molecules/TestimonialCard";

export const TestimonialSection = (props) => {
  return (
    <section>
      <Heading title={props.title} subtitle={props.subtitle}></Heading>
      <div>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
      </div>
    </section>
  );
};
