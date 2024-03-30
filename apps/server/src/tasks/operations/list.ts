import { prisma } from "../../lib/prisma";

export const listUserTasks = async (userId: string, options = {}): Promise<any> => {
    // @ts-ignore
    const { filter } = options;
    console.log(filter);
    const allTasks = await prisma.task.findMany({
        include: {
            Owner: true,
            TaskAssignees: true,
            Comments: true
        },
        orderBy: [
            {
              createdAt: 'desc',
            }
          ]
    });
    return Promise.resolve(allTasks);
}