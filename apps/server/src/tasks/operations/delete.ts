import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { Task } from '@prisma/client';


export const deleteTask = async (taskId: string): Promise<Task> => {
    return await prisma.task.delete({
        where: {
            id: parseInt(taskId)
        }
    });
}