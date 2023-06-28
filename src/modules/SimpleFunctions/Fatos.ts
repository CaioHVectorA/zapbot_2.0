import { fatos } from "../Utilities/data/Fatos";
import { Comando } from "../Data/FunctionConstructor";
const FatosFunc = () => {
  const fatoFound = fatos[Math.floor(Math.random() * fatos.length)];
  return `${fatoFound}`;
};

export const Fatos = new Comando(
  ["Fato", "Fatos", "Verdade", "FatoAleatório"],
  FatosFunc,
  false,
  false,
  []
);
