import { Client, Message, MessageContent } from "whatsapp-web.js";
import ProcessFunction from "./ProcessFunction";

export default async function Format(fullString: string, message?: Message, client?: Client) {
  console.log("Formatando Mensagem...");
  if (!fullString.startsWith("!")) return `Comando Invalido!`;
  const formatStringInArray = fullString
    .toLowerCase()
    .trim()
    .replace("!", "")
    .split(" ");
  const identifier = formatStringInArray.splice(0, 1)[0];
  const res = await ProcessFunction({
    identifier,
    params: formatStringInArray,
    args: {msg: message, client}
  });
  return res;
}
