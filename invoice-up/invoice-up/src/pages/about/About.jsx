import { Hero } from "../../components/layout/hero/Hero";
import { Header } from "../../components/layout/header/Header";
import { DiagonalSparator } from "../../components/atoms/DiagonalSeparator";
import { Footer } from "../../components/layout/footer/Footer";
import { FeaturesAbout } from "../../components/layout/FeaturesAbout";
import { TeamSection } from "../../components/layout/team/TeamSection";
import { AboutStyled } from "./AboutStyled";
import image from "../../assets/Friends taking selfie.png";

export const About = () => {
  return (
    <AboutStyled>
      <Header />
      <Hero
        title="La revolución de la facturación."
        subtitle="Conociendo a la banda detrás de la magia"
        image={image}
        action="Facturar ahora"
        path="/login"
      ></Hero>
      <DiagonalSparator />
      <FeaturesAbout></FeaturesAbout>

      <TeamSection></TeamSection>

      <Footer />
    </AboutStyled>
  );
};
