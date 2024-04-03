import { prisma } from "../../lib/prisma";
import { Task } from '@prisma/client';

export const findById = async (taskId: string): Promise<Task | null> => {
    return prisma.task.findUnique({
        where: {
            id: parseInt(taskId),
        },
        include: {
            Comments: {
                include: {
                    author: true
                }
            },
            Labels: true
        }
    });
}