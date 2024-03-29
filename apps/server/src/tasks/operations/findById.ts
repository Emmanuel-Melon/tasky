import { prisma } from "../../lib/prisma";

export const findById = async (taskId: string): Promise<any> => {
    return await prisma.task.findUnique({
        where: {
            id: parseInt(taskId)
        }
    });
}