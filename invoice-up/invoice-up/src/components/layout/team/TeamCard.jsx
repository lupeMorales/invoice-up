/* import { useEffect, useState } from "react";
import dataTeam from "../../../data/team.json";
import { TeamCardStyled } from "./TeamCardStyled";

function useAssets(asset) {
  const assets = import.meta.glob("../../../assets/*", { eager: true });

  console.warn({ assets });

  if (assets[asset]) {
    return assets[asset].default;
  }
  return null;
}

export const TeamCard = () => {
  const [infoTeam, setInfoTeam] = useState([]);
  useEffect(() => {
    const get = async () => {
      const result = [];

      for (let index = 0; index < dataTeam.length; index++) {
        const element = dataTeam[index];
        const image = useAssets("../../../assets/" + element.img);
        console.log("image", image);

        result.push({
          ...element,
          image,
        });
      }

      setInfoTeam(result);
    };

    get();
  }, []);

  return (
    <>
      {infoTeam.map((team) => {
     
        return (
          <TeamCardStyled key={team.id}>
            <img src={team.image} alt={team.name} />
            <div>
              <h3>{team.name}</h3>
              <h5>{team.job} </h5>
            </div>
          </TeamCardStyled>
        );
      })}
    </>
  );
};
 */
import { useEffect, useState } from "react";
import dataTeam from "../../../data/team.json";
import { TeamCardStyled } from "./TeamCardStyled";
import icon from "../../../assets/linkedin.svg";
/* import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; */

function useAssets(asset) {
  const assets = import.meta.glob("../../../assets/*", { eager: true });

  if (assets[asset]) {
    return assets[asset].default;
  }
  return null;
}

export const TeamCard = () => {
  const [infoTeam, setInfoTeam] = useState([]);
  useEffect(() => {
    const get = async () => {
      const result = [];

      for (let index = 0; index < dataTeam.length; index++) {
        const element = dataTeam[index];
        const image = useAssets("../../../assets/" + element.img);

        result.push({
          ...element,
          image,
        });
      }

      setInfoTeam(result);
    };

    get();
  }, []);

  return (
    <>
      {infoTeam.map((team) => {
        return (
          <TeamCardStyled key={team.id}>
            <img src={team.image} alt={team.name} />
            <div>
              <h3>{team.name}</h3>
              <h5>{team.job}</h5>
              {team.linkedin && (
                <a
                  href={team.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon}
                    alt="icono de linkedin"
                    className="linkedin-icon"
                  />
                </a>
              )}
            </div>
          </TeamCardStyled>
        );
      })}
    </>
  );
};
