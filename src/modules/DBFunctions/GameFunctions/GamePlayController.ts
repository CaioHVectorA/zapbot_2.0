import getUserByTel from "../../Utilities/GetUserByTelnumber";
import { prisma } from "../../Utilities/prisma";
import { RenderJogoDaVelha } from '../../Utilities/GameFuncionts/JogoDaVelha'

export default async function GamePlayController(game: string, gameplay: number,telnumber: string): Promise<string> {
    if (game === 'jogodavelha') {
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
    else {
        return `Erro`
    }
}