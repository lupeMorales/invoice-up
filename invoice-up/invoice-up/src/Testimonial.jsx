import { useState } from "react";
import dataTestimonial from "./data/testimonials.json";

export const Testimonial = () => {
  const [testimonialList, setTestimonialList] = useState(dataTestimonial);

  return (
    <div>
      {testimonialList.map((testimonial) => {
        /*    const image = require(`./assets/${testimonial.img}`); */
        return (
          <div key={testimonial.id}>
            <p>{testimonial.name}</p>
            <h1>{testimonial.name}</h1>
            <h2>{testimonial.job}</h2>
            <img src={testimonial.img} alt={testimonial.name} />
          </div>
        );
      })}
    </div>
  );
};
