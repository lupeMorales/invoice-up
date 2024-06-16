import { TeamSectionStyled } from "./TeamSectionStyled";
import { Heading } from "../../molecules/Heading";
import { TeamCard } from "./TeamCard";

export const TeamSection = () => {
  return (
    <TeamSectionStyled>
      <Heading
        align="start"
        title="Detrás de cada factura, hay un gran equipo"
        subtitle="Los cerebros y las manos detrás de Invoice Up"
      ></Heading>
      <ul>
        <TeamCard></TeamCard>
      </ul>
    </TeamSectionStyled>
  );
};
