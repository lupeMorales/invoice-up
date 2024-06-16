import { Hero } from "../../components/layout/hero/Hero";
import { Header } from "../../components/layout/header/Header";
import { DiagonalSparator } from "../../components/atoms/DiagonalSeparator";
import { Footer } from "../../components/layout/footer/Footer";
import { FeaturesAbout } from "../../components/layout/FeaturesAbout";
import image from "../../assets/Friends taking selfie.png";

export const About = () => {
  return (
    <>
      <Header />
      <Hero
        title="La revolución de la facturación."
        subtitle="Conociendo a la banda detrás de la magia"
        image={image}
      ></Hero>
      <DiagonalSparator />
      <FeaturesAbout></FeaturesAbout>

      <Footer />
    </>
  );
};
