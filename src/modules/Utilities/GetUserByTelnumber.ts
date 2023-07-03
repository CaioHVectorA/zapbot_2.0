import { User } from "@prisma/client";
import { prisma } from "./prisma";

export default async function getUserByTel(number: string) {
    const user = await prisma.user.findFirst({
        where: {
            number
        }
    })
    return user
}