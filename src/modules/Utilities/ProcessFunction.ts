import { Client, Message } from "whatsapp-web.js";
import { Comando } from "../Data/FunctionConstructor";
import { functionsRepo } from "../Data/functionsData";
type args = {msg: Message | undefined, client: Client | undefined}
export default async function ProcessFunction({
  identifier,
  params,
  args,
}: {
  identifier: string;
  params: string[];
  args?: args
}) {
  console.log("Processando função!");
  for (const func of functionsRepo) {
    if (
      func.identifier.some(
        (ident) => ident.toLowerCase() === identifier.toLowerCase()
      )
    ) {
      try {
        const res = await runFunction(func, params,args);
        console.log(res)
        if (typeof res === 'object' && res.media) return { hasImg: true, response: res }
        if (typeof res === 'string') return { hasImg: false, response: res };
        
      } catch (error) {
        return {hasImg: false, response: `Ocorreu um erro! A função não foi encontrada.`}; 
      }
    }
  }
  return `Ocorreu um erro! A função não foi encontrada.`;
}

async function runFunction(func: Comando, params: string[],args?: args) {
  if (func.isAsync) {
    // func.script(params).then((res: string) => {
    const res = await func.script(params,args);
    console.log("Função assíncrona executada. Resposta:", res);
    return res;
    // });
  } else {
    const res = func.script(params,args);
    console.log("Função executada. Resposta:", res);
    return res;
  }
}
