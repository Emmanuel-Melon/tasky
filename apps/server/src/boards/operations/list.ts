import { prisma } from '../../lib/prisma';
import { z } from 'zod';
import { TaskStatus, TaskPriority, TaskLabels, Task } from '@prisma/client';

export const optionsSchema = z.object({
  priority: z.any(),
  status: z.any(),
  orderBy: z.string(),
  sortOrder: z.string().refine((value) => value === 'asc' || value === 'desc', {
    message: 'Sort order must be either "asc" or "desc"'
  })
});

export type Options = z.infer<typeof optionsSchema>;

export const listUserBoards = async (userId: string, options: any): Promise<any[]> => {
  return prisma.kanbanBoard.findMany({
    include: {
        lists: {
          include: {
            tasks: true
          }
        }
      }
  });
};
