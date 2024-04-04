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
    }),
    items: z.any(),
});

export type Options = z.infer<typeof optionsSchema>;

export const listUserTasks = async (userId: string, options: any): Promise<Task[]> => {
    // Extract dynamic values from req.query
    const { '/status': status, sort, orderBy, priority } = options.query;

    // Convert orderBy to Prisma's expected format
    const sortOrder = orderBy === 'desc' ? 'desc' : 'asc';
    const res = await prisma.task.findMany({
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
      // orderBy: [
      //   {
      //     [sort as string]: sortOrder
      //   }
      // ]
    });

    console.log("res", res);
  return res;
};
