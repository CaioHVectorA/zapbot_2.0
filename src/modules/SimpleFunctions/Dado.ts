import { Comando } from "../Data/FunctionConstructor";

const DadoFunc = (array: string[]) => {
  const number = parseInt(array[0]) || 6;
  if (!array[1]) {
    const RNG = Math.floor(Math.random() * number) + 1;
    return `Você rolou um dado de ${number} lados. Você tirou ${RNG}!`;
  } else {
    const numDados = parseInt(array[1]);
    let resNumber = ``;
    for (let index = 1; index !== numDados + 1; index++) {
      const RNG = Math.floor(Math.random() * number) + 1;
      resNumber += `\n O dado ${index} rolou e caiu em ${RNG}!`;
      // console.log(resNumber);
    }
    return `Você rolou ${numDados} de ${number} lados e este foi o resultado: ${resNumber}`;
  }
};

export const Dado = new Comando(
  ["dado", "rolardado", "tirardado", "d"],
  DadoFunc,
  false,
  false,
  [
    {
      name: "number",
      type: "number",
    },
  ]
);
