import { Comando } from "../../Data/FunctionConstructor";
import { GameMethods } from "../GameFunctionsConstructor";


const usecase = new GameMethods()

export const JogarGame = new Comando(
    ['Jogar','JogarJogo'],
    usecase.update,
    false,
    true,
    [{
        name: 'numerodejogada',
        type: 'number'
    }]
)