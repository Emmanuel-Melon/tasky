import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { Task } from '@prisma/client';

export const taskSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    ownerId: z.number()
});

export type TaskAttributes = z.infer<typeof taskSchema>;

export const createNewTask = async (taskAttributes: any): Promise<Task> => {
    return await prisma.task.create({
        data: {
            ...taskAttributes
        }
    });
}