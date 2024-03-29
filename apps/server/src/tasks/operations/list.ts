import { prisma } from "../../lib/prisma";

export const listUserTasks = async (userId: string): Promise<any> => {
    const allTasks = await prisma.task.findMany({
        include: {
            Owner: true,
            TaskAssignees: true,
            Comments: true
        }
    });
    return Promise.resolve(allTasks);
}