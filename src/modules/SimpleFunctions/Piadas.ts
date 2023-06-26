import { Comando } from "../Data/FunctionConstructor";
import { PIADAS } from "../Utilities/data/Piadas";
function PiadaFunc() {
  const { pergunta, resposta } =
    PIADAS[Math.floor(Math.random() * PIADAS.length)];
  const res = `${pergunta} \n ${resposta}`;
  return res;
}

export const Piada = new Comando(
  ["Piada", "Piadas", "Piadoca", "Joke"],
  PiadaFunc,
  false,
  []
);
