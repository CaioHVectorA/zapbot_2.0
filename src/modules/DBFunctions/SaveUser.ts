import { Message } from "whatsapp-web.js";
import { Comando } from "../Data/FunctionConstructor";
import { prisma } from "../Utilities/prisma";


async function SaverUserFunc(params: string[], args: any) {
    //@ts-ignore
    console.log('msg',)
    // if (!message) {
    //     const userDB = await prisma.user.create({data: {
    //         name: args[0],
    //         number: 'any'
    //     }})
    // } else {
    //     const userDB = await prisma.user.create({data: {
    //         name: args[0],
    //         number: message.author || 'failed'
    //     }})
    // }
    return `Usuário Criado!`
}






export const SaveUser = new Comando(
    ['Criar','User','Salvar','Registrar','Entrar','CriarUsuário','CriarUsuario','Create'],
    SaverUserFunc,
    false,
    true,
    [{name: 'Username',type: 'string'},{name: 'message',type: 'object'}]
)