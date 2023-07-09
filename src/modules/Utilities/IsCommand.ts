import { functionsRepo } from "../Data/functionsData";

export default function isCommand(msg: string) {
    const command = msg.trim().split(' ')[0].replace('!', '')
    console.log(command)
    for (const func of functionsRepo) {
        if (
            func.identifier.some(
                (ident) => ident.toLowerCase() === command.toLowerCase()
            )
        ) {
            return true
        }
    }
    return false
}