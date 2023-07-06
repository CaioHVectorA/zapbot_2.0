import getUserByTel from "../../GetUserByTelnumber"
import { prisma } from "../../prisma"
import { RenderJogoDaVelha } from "./JogoDaVelha"
import { jogarIA } from "./JogoDaVelhaIA"

function verificarVitoria(tabuleiro: string[], jogador: string) {
    // Combinações de vitória possíveis no jogo da velha
    const combinacoesVitoria = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
      [0, 4, 8], [2, 4, 6] // Diagonais
    ];
  
    // Verificar se alguma combinação de vitória está preenchida pela IA
    for (let combinacao of combinacoesVitoria) {
      const [a, b, c] = combinacao;
      if (tabuleiro[a] === jogador && tabuleiro[b] === jogador && tabuleiro[c] === jogador) {
        return true;
      }
    }
  
    return false;
  }
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
    if (verificarVitoria(schema, 'X')) {
        // Jogador venceu
        const wonGame = await prisma.game.delete({
            where: {
                user_id: user.id
            }
        })
        const userupdated = await prisma.user.update({ where: { id: user.id }, data: { in_active_game: false } })
        return `Parabéns, você venceu o jogo! \n ${RenderJogoDaVelha(schema)}`
    }
    schema[jogarIA(schema) - 1] = 'O'
    if (verificarVitoria(schema, 'O')) {
        // Bot venceu
        const loseGame = await prisma.game.delete({
            where: {
                user_id: user.id
            }
        })
        const userupdated = await prisma.user.update({ where: { id: user.id }, data: { in_active_game: false } })
        return `Que pena, você perdeu o jogo o jogo! \n ${RenderJogoDaVelha(schema)}`
    }
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