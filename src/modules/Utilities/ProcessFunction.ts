import { Comando } from "../Data/FunctionConstructor";
import { functionsRepo } from "../Data/functionsData";

export default async function ProcessFunction({
  identifier,
  params,
}: {
  identifier: string;
  params: string[];
}) {
  console.log("Processando função!");
  for (const func of functionsRepo) {
    if (
      func.identifier.some(
        (ident) => ident.toLowerCase() === identifier.toLowerCase()
      )
    ) {
      const res = await runFunction(func, params);
      console.log(res)
      if (typeof res === 'object' && res.media) return { hasImg: true, response: res }
      if (typeof res === 'string') return { hasImg: false, response: res };
    }
  }
  return `Ocorreu um erro! A função não foi encontrada.`;
}

async function runFunction(func: Comando, params: string[]) {
  if (func.isAsync) {
    // func.script(params).then((res: string) => {
    const res = await func.script(params);
    console.log("Função assíncrona executada. Resposta:", res);
    return res;
    // });
  } else {
    const res = func.script(params);
    console.log("Função executada. Resposta:", res);
    return res;
  }
}
