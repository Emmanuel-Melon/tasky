import { prisma } from "../../lib/prisma";
import { User } from '@prisma/client';

export const findById = async (userId: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            id: parseInt(userId),
        },
    });
};