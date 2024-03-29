import { z } from "zod";
import { prisma } from "../../lib/prisma";

export const deleteTask = async (taskId: string): Promise<any> => {
    return await prisma.task.delete({
        where: {
            id: parseInt(taskId)
        }
    });
}