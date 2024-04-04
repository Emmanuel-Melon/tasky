import { prisma } from '../../lib/prisma';
import { z } from 'zod';
import { User } from '@prisma/client';


export const listUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};
