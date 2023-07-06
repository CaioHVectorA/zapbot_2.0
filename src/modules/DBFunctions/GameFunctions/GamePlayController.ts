import GameJogoDaVelha from "../../Utilities/GameFuncionts/JogoDaVelha/J_VelhaGame";

export default async function GamePlayController(game: string, gameplay: number,telnumber: string): Promise<string> {
    if (game === 'jogodavelha') {
        const res = await GameJogoDaVelha(game,gameplay,telnumber)
        return res
    }
    else {
        return `Erro`
    }
}