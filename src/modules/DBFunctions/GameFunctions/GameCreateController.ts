import { RenderJogoDaVelha } from "../../Utilities/GameFuncionts/JogoDaVelha";

export function GameController(gamename: string): {infos: string, schema: string} {
    if (gamename.toLowerCase() === 'jogodavelha') {
        const initial = ['1','2','3','4','5','6','7','8','9']
        return {
            infos: JSON.stringify(initial),
            schema: RenderJogoDaVelha(initial)
        }
    } else {
        return {
            infos: 'error',
            schema: 'error'
        }
    }
}