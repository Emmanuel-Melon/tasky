import { z } from 'zod';
import { prisma } from '../../lib/prisma';
import { KanbanBoard, KanbanList } from '@prisma/client';

export const boardSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  ownerId: z.number().optional()
});

export type BoardAttributes = z.infer<typeof boardSchema>;

export const createNewBoard = async (boardAttributes: any): Promise<KanbanBoard> => {
  return await prisma.kanbanBoard.create({
    data: {
      ...boardAttributes
    }
  });
};

export const listSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  ownerId: z.number().optional(),
  boardId: z.number().optional()
});

export type ListAttributes = z.infer<typeof listSchema>;

export const createNewList = async (listAttributes: any): Promise<KanbanList> => {
  return await prisma.kanbanList.create({
    data: {
      ...listAttributes
    }
  });
};
