// @ts-nocheck
import axios from "axios";
import { MessageMedia } from "whatsapp-web.js";
import { Comando } from "../Data/FunctionConstructor";
import POKEURL from "../envariables";
async function getPokeData(poke: string) {
  console.log(`name`, POKEURL + poke);
  try {
    const data = (await axios.get("https://pokeapi.co/api/v2/pokemon/" + poke))
    const {
      name,
      abilities,
      id,
      stats,
      sprites,
    }: {name: string; abilities: any[]; id: any; 
      stats: any[]; sprites: any} = data.data;
    return { name, abilities, id, stats, sprites };
  } catch (error) {
    return 'error'
  }
}

async function PokeFunc(Params) {
  const poke = Params[0];
  const data = await getPokeData(poke);
  if (data === 'error') return `Seu pokemon não foi encontrado!`
  const { name, abilities, id, stats, sprites } = await getPokeData(poke);
  const { front_default } = sprites;
  const arrSkills = [];
  abilities.forEach((skill: any) => {
    arrSkills.push(
      `${skill.is_hidden ? "*" : ""}${skill.ability.name}${
        skill.is_hidden ? "*" : ""
      }`
    );
  });
  const HabilidadesRes = arrSkills.join("\n");
  const responseMSG = `Você buscou o pokemon: ${name} #${id}
Habilidades: 
${HabilidadesRes}
Status: 
HP:  ${stats[0].base_stat}
Atk: ${stats[1].base_stat}
Def: ${stats[2].base_stat}
SpA: ${stats[3].base_stat}
SpD: ${stats[4].base_stat}
Spe: ${stats[5].base_stat}
    `;
  // return responseMSG;
  // return downloadImage(front_default,'./data/image.png').then(Response => {
  return MessageMedia.fromUrl(front_default).then((Response) => {
    const response = { media: Response, caption: responseMSG };
    return response;
  });
}

export const Pokemon = new Comando(
  ["poke", "pokemon", "pokémon", "pok"],
  PokeFunc,
  true,
  true,
  [{ name: "pokemon", type: "string" }]
);
