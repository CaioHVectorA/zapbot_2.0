import { Client, Message } from "whatsapp-web.js";
import { Comando } from "../Data/FunctionConstructor";


const avisoFunction = function (params: string[], args: { msg: Message, client: Client }) {
    const [titulo, timeout] = params
    if (isNaN(parseInt(timeout))) return `Você não providenciou um número em minutos.`
    setTimeout(() => {
        args.msg.reply(`Seu aviso ${titulo} está pronto!`)
    }, parseInt(timeout) * 60 * 1000)
    return `Aviso criado com sucesso!`
}

export const Aviso = new Comando(
    ['Aviso', 'CriarAviso', 'avisar', 'lembrete'],
    avisoFunction,
    false,
    false,
    [{ name: 'titulo', type: 'string' }, { name: 'time', type: 'number' }]
)