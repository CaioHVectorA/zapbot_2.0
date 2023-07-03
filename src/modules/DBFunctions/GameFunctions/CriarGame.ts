import { Comando } from "../../Data/FunctionConstructor"
import { GameMethods } from "../GameFunctionsConstructor"

const usecase = new GameMethods()

export const CriarGame = new Comando(
    ['CriarJogo','comecarjogo','criarjogo','jugar','jogo'],
    usecase.create,
    false,
    true,
    [{
        name: 'namegame',
        type: 'string'
    }]
)