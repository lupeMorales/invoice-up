import { Hero } from "../components/layout/Hero";
import image from "../assets/404.png";
import { DiagonalSparator } from "../components/atoms/DiagonalSeparator";

export const Page404 = () => {
  return (
    <>
      <Hero
        title="Oh no, algo salió mal"
        subtitle="No te preocupes, te llavamos a casa"
        image={image}
      ></Hero>
      <DiagonalSparator></DiagonalSparator>
    </>
  );
};
