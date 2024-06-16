import { useEffect, useState } from "react";
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
        /*       la línea está construyendo una URL completa para la imagen, teniendo en cuenta tanto la ruta relativa de la imagen como la ubicación del componente actual. */

        /*    const imgURL = new URL(`../../${testimonial.img}`, import.meta.url);
            console.log("imgURL:", imgURL); */
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
