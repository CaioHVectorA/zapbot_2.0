import readline from "readline";
import Format from "./modules/Utilities/formatMessage";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Mande sua simulação de mensagem! \n", (msg) => {
  console.log(`RESPONSE:`, Format(msg));
  rl.close();
});
