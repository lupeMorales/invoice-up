import { TeamSectionStyled } from "./TeamSectionStyled";
import { Heading } from "../../molecules/Heading";
import { TeamCard } from "./TeamCard";

export const TeamSection = () => {
  return (
    <TeamSectionStyled>
      <Heading align="start" title="La banda" subtitle="todos a una"></Heading>
      <ul>
        <TeamCard></TeamCard>
      </ul>
    </TeamSectionStyled>
  );
};
