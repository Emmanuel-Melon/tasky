import { prisma } from '../../lib/prisma';
import { z } from 'zod';
import { TaskStatus, TaskPriority, TaskLabels, Task } from '@prisma/client';

export const optionsSchema = z.object({
  priority: z.any(),
  status: z.any(),
  orderBy: z.string(),
  sortOrder: z
    .string()
    .refine((value) => value === 'asc' || value === 'desc', {
      message: 'Sort order must be either "asc" or "desc"'
    })
});

export type Options = z.infer<typeof optionsSchema>;

export const listUserTasks = async (userId: string, options: any): Promise<Task[]> => {
  const { priority, status, orderBy, sortOrder } = options;
  return prisma.task.findMany({
    where: {
      ownerId: parseInt(userId),
      ...(status && {
        OR: [
          {
            status: {
              equals: status?.toUpperCase()
            }
          },
          {
            priority: {
              equals: priority?.toUpperCase()
            }
          }
        ]
      })
    },
    include: {
      Owner: true,
      TaskAssignees: true,
      Comments: true
    },
    orderBy: [
      {
        [orderBy as string]: sortOrder
      }
    ]
  });
};
