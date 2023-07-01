import { RenderJogoDaVelha } from "../../Utilities/GameFuncionts/JogoDaVelha";

export function GameController(gamename: string): string {
    if (gamename.toLowerCase() === 'jogodavelha') {
        return RenderJogoDaVelha(['1','2','3','4','5','6','7','8','9'])
    } else {
        return `Error`
    }
}