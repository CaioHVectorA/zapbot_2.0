import qrcode from "qrcode-terminal";
import { Client, LocalAuth } from "whatsapp-web.js";
import Format from "./modules/Utilities/formatMessage";
import isCommand from "./modules/Utilities/IsCommand";
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("auth_failure", (message) => {
  console.log("Não conectou direito");
});

client.on("authenticated", () => console.log("Autenticou"));

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

console.log(` ZAP BOT - BY VECTOR
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣶⣶⣶⣶⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
   ⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀
    ⠀⠀⠀⣠⣴⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣵⣄⠀⠀⠀
     ⠀⠀⢾⣻⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⡀⠀
      ⠀⠸⣽⣻⠃⣿⡿⠋⣉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣏⡟⠉⡉⢻⣿⡌⣿⣳⡥⠀
       ⠀⢜⣳⡟⢸⣿⣷⣄⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣠⣼⣿⣇⢸⢧⢣⠀
        ⠀⠨⢳⠇⣸⣿⣿⢿⣿⣿⣿⣿⡿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡟⢆⠀
         ⠀⠀⠈⠀⣾⣿⣿⣼⣿⣿⣿⣿⡀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣽⣿⣿⠐⠈⠀⠀
          ⠀⢀⣀⣼⣷⣭⣛⣯⡝⠿⢿⣛⣋⣤⣤⣀⣉⣛⣻⡿⢟⣵⣟⣯⣶⣿⣄⡀⠀
           ⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣾⣶⣶⣴⣾⣿⣿⣿⣿⣿⣿⢿⣿⣿⣧
            ⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⡿
            O QR code está sendo gerado.
            Powered by Whatsapp-Web.js!
            `);

client.on("ready", () => {
  console.log("Servidor pronto!");
});
client.on("message_create", async (message) => {
  if (typeof message.body !== "string" || !message.body.startsWith("!")) return;
  if (!isCommand(message.body)) return;
  const res: { hasImg: boolean; response: string } | any = await Format(
    message.body,
    message,
    client
  );
  if (res.hasImg) {
    client.sendMessage(message.from, res.response.media, {
      caption: res.response.caption,
    });
  } else {
    message.reply(res.response)
    // client.sendMessage(message.from, res.response);
  }
});

// client.on('message_create',async (message) => {
//   if (message.hasQuotedMsg && message.body === '/deletar') {
//     console.log('foi')
//     const msg = await message.getQuotedMessage()
//     console.log(msg.body)
//     const msgdel = await msg.delete(true)
//   }
// })

client.initialize();
