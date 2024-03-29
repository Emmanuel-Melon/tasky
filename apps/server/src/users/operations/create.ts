import { prisma } from "../../lib/prisma";

export const createNewUser = async (userAttributes: any): Promise<any> => {
    const user = await prisma.user.create({
        data: {
            ...userAttributes,
            createdAt: new Date()
        }
    });
    return Promise.resolve(user);
}