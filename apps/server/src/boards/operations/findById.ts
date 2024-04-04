import { prisma } from "../../lib/prisma";
import { KanbanList, KanbanBoard } from '@prisma/client';

export const findBoardById = async (taskId: string): Promise<KanbanBoard | null> => {
    return prisma.kanbanBoard.findUnique({
        where: {
            id: parseInt(taskId),
        },
        include: {
            owner: true,
            lists: true
        }
    });
}

export const findListById = async (taskId: string): Promise<KanbanList | null> => {
    return prisma.kanbanList.findUnique({
        where: {
            id: parseInt(taskId),
        },
        include: {
            tasks: true
        }
    });
}