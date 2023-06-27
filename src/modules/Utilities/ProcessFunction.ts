import { Comando } from "../Data/FunctionConstructor";
import { functionsRepo } from "../Data/functionsData";

export default function ProcessFunction({
  identifier,
  params,
}: {
  identifier: string;
  params: string[];
}) {
  // console.log("Processando função!");
  for (const func of functionsRepo) {
    if (
      func.identifier.some(
        (ident) => ident.toLowerCase() === identifier.toLowerCase()
      )
    ) {
      const res = runFunction(func, params);
      // console.log(`response:`, res);
      return res;
    }
  }
  return `Ocorreu um erro! A função não foi encontrada.`;
}

function runFunction(func: Comando, params: string[]) {
  if (func.isAsync) {
    return func.script(params).then((res: string) => {
      // console.log("Função assíncrona executada. Resposta:", res);
      return res;
    });
  } else {
    const res = func.script(params);
    // console.log("Função executada. Resposta:", res);
    return res;
  }
}
