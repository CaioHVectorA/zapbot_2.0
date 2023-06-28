import { MessageContent } from "whatsapp-web.js";
import ProcessFunction from "./ProcessFunction";

export default async function Format(fullString: string) {
  console.log("Formatando Mensagem...");
  if (!fullString.startsWith("!")) return `Comando Invalido!`;
  const formatStringInArray = fullString
    .toLowerCase()
    .trim()
    .replace("!", "")
    .split(" ");
  const identifier = formatStringInArray.splice(0, 1)[0];
  // console.log(
  //   `Mensagem Formatada. ( ${JSON.stringify({
  //     identifier,
  //     formatStringInArray,
  //   })}} ), enviando para processamento`
  // );
  const res = await ProcessFunction({
    identifier,
    params: formatStringInArray,
  });
  console.log(`RESPOSTA FINAL:`, res);
  return res;
}
