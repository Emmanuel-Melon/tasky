import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { Task } from '@prisma/client';

export const updateTask = async (taskId: string, taskAttributes: any): Promise<Task | null> => {
    // First, check if the task exists
    const existingTask = await prisma.task.findUnique({
        where: {
            id: parseInt(taskId),
        },
    });

    if (!existingTask) {
        throw new Error(`Task with ID ${taskId} not found.`);
    }

    // Update the task with the provided attributes
    return await prisma.task.update({
        where: {
            id: parseInt(taskId),
        },
        data: {
            ...taskAttributes,
        },
    });
}