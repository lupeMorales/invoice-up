import styled from "styled-components";
import { useState } from "react";

const AccordionFieldsetStyled = styled.div`
  padding: 20px 0;
  .accordion {
    cursor: pointer;
    padding: 10px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.8s;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.color.accent};
    border-radius: 0.375rem;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.light_text};
    font-weight: 100;
  }

  .accordion.active {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.light_text};
  }

  .panel {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: white;
    //border: 1px solid #ccc;
    margin-top: 10px;
    background-color: #4f49cc;
  }
`;

export const AccordionFieldset = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = (ev) => {
    ev.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <AccordionFieldsetStyled>
      <button
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {title}
      </button>
      <fieldset
        className="panel"
        style={{ display: isActive ? "block" : "none" }}
      >
        {children}
      </fieldset>
    </AccordionFieldsetStyled>
  );
};
