import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { User } from '@prisma/client';

export const updateUserInfo = async (userId: string, userAttributes: any): Promise<User | null> => {
    // First, check if the user exists
    const existingUser = await prisma.user.findUnique({
        where: {
            id: parseInt(userId),
        },
    });

    if (!existingUser) {
        throw new Error(`User with ID ${userId} not found.`);
    }

    // Update the user with the provided attributes
    return await prisma.user.update({
        where: {
            id: parseInt(userId),
        },
        data: {
            ...userAttributes,
        },
    });
}