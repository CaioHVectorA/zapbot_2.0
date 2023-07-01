import { RenderJogoDaVelha } from "../Utilities/GameFuncionts/JogoDaVelha";
import { prisma } from "../Utilities/prisma";
import {Comando} from '../Data/FunctionConstructor'
import { GameController } from "./GameFunctions/GameController";
import { Client, Message } from "whatsapp-web.js";
type gamename = "JogoDaVelha" | "Calcular" | "BlackJack" | "Charada" | "Forca"   
export class GameMethods {
    async create(params: any,args: {msg: Message | undefined, client: Client | undefined}) {
        if (!params[0]) return `Nome do jogo não providenciado`
        if (!args.msg?.from) return `Ocorreu um erro. Número não foi encontrado.`
        const telnumber = args.msg.from
        const gamename: gamename = params[0]
        const user = await prisma.user.findFirst({
            where: {
                number: telnumber
            }
        })
        if (user?.in_active_game) return `Você já está em um jogo!`
        if (!user || !user.id) return `Você não possui uma conta registrada.`
        const game = await prisma.game.create({data: {
            game_name: gamename,
            game_schema: GameController(gamename),
            user_id: user.id
        }})
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                in_active_game: true,
            }
        })
        return `Jogo criado com sucesso! \n ${game.game_schema}`
    }
    async delete(params: any, args: {msg: Message | undefined, client: Client | undefined}) {
        if (!args.msg?.from) return `Ocorreu um erro: Seu número não foi encontrado.`
        const telnumber = args.msg.from
        const user = await prisma.user.findFirst({
            where: {
                number: telnumber
            }
        })
        if (!user || !user.id) return `Você não possui uma conta registrada.`
        if (!user.in_active_game) return `Você não está em um jogo!`
        const gamedelete = await prisma.game.delete({
            where: {
                user_id: user.id
            }
        })
        await prisma.user.update({where: {id: user.id}, data: {in_active_game: false}})
        return `Jogo Deletado com sucesso!`
    }
}




