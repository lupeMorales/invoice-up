import { useState } from "react";
import dataTestimonial from "../../data/testimonials.json";
import styled from "styled-components";
/* import img from "../../assets/photo1.jpg";
import images from ``../../assets"; */

const StyledTestimonialCard = styled.div`
  display: inline-block;
  position: relative;
  width: 320px;
  padding: 80px 30px;
  margin: 0 10px;
  aspect-ratio: 1/1;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ebeaff;
  box-shadow: -1px 2px 29px -1px rgba(79, 73, 204, 0.75);
  -webkit-box-shadow: -1px 2px 29px -1px rgba(79, 73, 204, 0.75);
  -moz-box-shadow: -1px 2px 29px -1px rgba(79, 73, 204, 0.75);

  div {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 50%;
  }
  svg {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 50%;
  }

  h3 {
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
  h5 {
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight: 100;
  }

  p {
    padding: 20px 0;
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    font-weight: 300;
  }

  img {
    display: block;
    margin: auto;
    width: 100%;
    aspect-ratio: 1/1;
    max-width: 50px;
    border-radius: 50%;
    object-fit: fill;
    margin-bottom: 20px;
  }
`;
export const TestimonialCard = () => {
  const [testimonialList, setTestimonialList] = useState(dataTestimonial);
  return (
    <div>
      {testimonialList.map((testimonial) => {
        const image = `../../assets/${testimonial.img}`;
        return (
          <StyledTestimonialCard key={testimonial.id}>
            <div></div>
            <svg
              fill="#fff"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
              stroke-width="0.00032"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M6.67,26.06c.09,0,8.77-.14,8.77-11.89A7.22,7.22,0,1,0,5.67,20.9v4.16A1,1,0,0,0,6.67,26.06ZM3,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.88,9.31-5.77,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,3,14.17Z"></path>{" "}
                <path d="M22.22,26.06c.09,0,8.78-.14,8.78-11.89a7.22,7.22,0,1,0-9.78,6.73v4.16A1,1,0,0,0,22.22,26.06ZM18.56,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.89,9.31-5.78,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,18.56,14.17Z"></path>{" "}
              </g>
            </svg>

            <h3>{testimonial.name}</h3>
            <h5>{testimonial.job} </h5>
            <p>{testimonial.comment}</p>
            <img src={image} alt={testimonial.name} />
          </StyledTestimonialCard>
        );
      })}
    </div>
  );
};
