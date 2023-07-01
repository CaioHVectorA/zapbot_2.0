import {Comando} from '../../Data/FunctionConstructor'
import { GameMethods } from '../GameFunctionsConstructor'
const usecase = new GameMethods()

export const DeletarGame = new Comando( 
    ['Pararjogo','Parardejogar','DeletarGame','Desistir'],
    usecase.delete,
    false,
    true,
    []
)