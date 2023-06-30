import { Pokemon } from "../APIFunctions/Pokemon";
import { RemoverBg } from "../APIFunctions/RemoveBG";
import { SaveUser } from "../DBFunctions/SaveUser";
import { Dado } from "../SimpleFunctions/Dado";
import { Fatos } from "../SimpleFunctions/Fatos";
import { Piada } from "../SimpleFunctions/Piadas";
import { Comando } from "./FunctionConstructor";

export const functionsRepo: Comando[] = [Dado, Piada, Fatos, Pokemon,SaveUser,RemoverBg];
