import { prisma } from "../../lib/prisma";

export const createNewTask = async (taskAttributes: any): Promise<any> => {
    const task = await prisma.task.create({
        data: {
            ...taskAttributes
        }
    });
    console.log(task);
    return Promise.resolve(task);
}