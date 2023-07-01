import { Client, Message } from "whatsapp-web.js";
import { Comando } from "../Data/FunctionConstructor";
import { prisma } from "../Utilities/prisma";


async function SaverUserFunc(params: string[], args: {msg: Message | undefined, client: Client | undefined}) {
    //@ts-ignore
    if (!params[0]) return 'Providencie um nome de usuário antes!'
    const userFound = await prisma.user.findFirst({
        where: {
            OR: [
                {number: args.msg?.from},
                {name: params[0]}
            ]
        }
    })
    if (userFound) return `Já existe um usuário registrado nesse número ou nome de usuário.`
    const userDB = await prisma.user.create({
        data: {
            name: params[0],
            number: args.msg?.from || 'undefined'
        }
    })
    return `Usuário Criado!`
}






export const SaveUser = new Comando(
    ['Criar','User','Salvar','Registrar','Entrar','CriarUsuário','CriarUsuario','Create'],
    SaverUserFunc,
    false,
    true,
    [{name: 'Username',type: 'string'},{name: 'message',type: 'object'}]
)