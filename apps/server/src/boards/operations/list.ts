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

const lists = [
    {
        id: 1,
        title: 'Todo',
        tasksCount: 1,
        tasks: [
            {
                id: 1,
                title: "Implement Push Notifications",
                description: "Implement push notifications feature for real-time updates.",
                labels: [{ title: 'Feature', color: '#FF5733' }, { title: 'Urgent', color: '#FFC300' }]
            }
        ]
    },
    {
        id: 2,
        title: 'Doing',
        tasksCount: 3,
        tasks: [
            {
                id: 1,
                title: "Collaboration Feature",
                description: "Develop collaboration feature for inviting friends and sharing via links.",
                labels: [{ title: 'Feature', color: '#0099FF' }]
            },
            {
                id: 2,
                title: "Import/Export Content",
                description: "Add support for importing and exporting content.",
                labels: [{ title: 'Feature', color: '#33CC33' }]
            },
            {
                id: 3,
                title: "File Uploads",
                description: "Implement file and media uploads functionality.",
                labels: [{ title: 'Feature', color: '#9900FF' }, { title: 'Medium Priority', color: '#FF5733' }]
            }
        ]
    },
    {
        id: 3,
        title: 'Done',
        tasksCount: 2,
        tasks: [
            {
                id: 1,
                title: "Error Fallback Pages",
                description: "Create error fallback pages for handling errors and empty states.",
                labels: [{ title: 'Bug Fix', color: '#FF5733' }, { title: 'Critical', color: '#FFC300' }]
            },
            {
                id: 2,
                title: "Guides Section",
                description: "Add guides section for providing additional help and instructions.",
                labels: [{ title: 'Documentation', color: '#0099FF' }]
            }
        ]
    },
    {
        id: 4,
        title: 'Done',
        tasksCount: 2,
        tasks: [
            {
                id: 1,
                title: "Error Fallback Pages",
                description: "Create error fallback pages for handling errors and empty states.",
                labels: [{ title: 'Bug Fix', color: '#FF5733' }, { title: 'Critical', color: '#FFC300' }]
            },
            {
                id: 2,
                title: "Guides Section",
                description: "Add guides section for providing additional help and instructions.",
                labels: [{ title: 'Documentation', color: '#0099FF' }]
            }
        ]
    }
];

export const listUserBoards = async (userId: string, options: any): Promise<any[]> => {
  const { priority, status, orderBy, sortOrder } = options;
  return Promise.resolve(lists);
};
