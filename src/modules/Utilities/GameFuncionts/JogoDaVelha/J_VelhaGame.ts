import getUserByTel from "../../GetUserByTelnumber"
import { prisma } from "../../prisma"
import { RenderJogoDaVelha } from "./JogoDaVelha"
import { jogarIA } from "./JogoDaVelhaIA"

export default async function GameJogoDaVelha(game: string, gameplay: number,telnumber: string) {
    const user = await getUserByTel(telnumber)
    if (!user) return `Numero não encontrado!`
    const prevGame = await prisma.game.findFirst({
        where: {
            user_id: user?.id
        }
    }) 
    if (!prevGame) return `Jogo não encontrado!`
    const schema = JSON.parse(prevGame?.game_infos)
    schema[gameplay - 1] = 'X'
    schema[jogarIA(schema) - 1] = 'O'
    const newGame = await prisma.game.update({
        where: {
            user_id: user.id
        },
        data: {
            game_schema: RenderJogoDaVelha(schema),
            game_infos: JSON.stringify(schema),
            game_round: prevGame.game_round + 1
        }
    })
    return `${newGame.game_schema}`
}