import { Pokemon } from "../APIFunctions/Pokemon";
import { RemoverBg } from "../APIFunctions/RemoveBG";
import { CriarGame } from "../DBFunctions/GameFunctions/CriarGame";
import { DeletarGame } from "../DBFunctions/GameFunctions/DeletarGame";
import { JogarGame } from "../DBFunctions/GameFunctions/JogarGame";
import { SaveUser } from "../DBFunctions/SaveUser";
import { Aviso } from "../SimpleFunctions/Aviso";
import { Dado } from "../SimpleFunctions/Dado";
import { Fatos } from "../SimpleFunctions/Fatos";
import { Piada } from "../SimpleFunctions/Piadas";
import { Comando } from "./FunctionConstructor";

export const functionsRepo: Comando[] = [
    Dado,
    Piada,
    Fatos,
    Pokemon,
    SaveUser,
    RemoverBg,
    CriarGame,
    DeletarGame,
    JogarGame,
    Aviso,
];
