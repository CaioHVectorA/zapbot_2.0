import { Comando } from "../Data/FunctionConstructor";

const DadoFunc = (array: string[]) => {
  const number = parseInt(array[0]);
  if (!array[1]) {
    const RNG = Math.floor(Math.random() * number) + 1;
    return `Você rolou um dado de ${number} lados. Você tirou ${RNG}!`;
  } else {
    //
  }
};

export const Dado = new Comando(
  ["dado", "rolardado", "tirardado", "d"],
  DadoFunc,
  false,
  [
    {
      name: "number",
      type: "number",
    },
  ]
);
