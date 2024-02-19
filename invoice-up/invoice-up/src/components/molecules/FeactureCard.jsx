import styled from "styled-components";

const StyledCard = styled.article`
  width: 355px;
  padding: 80px 20px;
  border: 1px solid ${(props) => props.theme.color.light_primary};
  border-radius: 5px;
  background-color: #fafafa;

  h3,
  p {
    text-align: center;
  }

  h3 {
    padding-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
  img {
    display: block;
    margin: auto;
    width: 100%;
    max-width: 100px;
    object-fit: fill;
    margin-bottom: 20px;
  }
`;

export const FeactureCard = (props) => {
  return (
    <StyledCard>
      <img src={props.image} alt={props.alt} />
      <h3> {props.title}</h3>
      <p> {props.text}</p>
    </StyledCard>
  );
};
