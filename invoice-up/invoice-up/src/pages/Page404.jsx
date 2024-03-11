import { HeroBounce } from "../components/layout/hero/Hero";
import image from "../assets/404.png";
import { DiagonalSparator } from "../components/atoms/DiagonalSeparator";
import { Navigate, useNavigate } from "react-router-dom";

export const Page404 = () => {
  return (
    <>
      <HeroBounce
        title="Oh no, algo salió mal"
        subtitle="No te preocupes, te llavamos a casa"
        image={image}
        entrance="bounce"
        action="Volver a casa"
        path="/"
      ></HeroBounce>
      <DiagonalSparator></DiagonalSparator>
    </>
  );
};
