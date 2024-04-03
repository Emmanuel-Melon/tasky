import { prisma } from '../../lib/prisma';
import { User } from '@prisma/client';
import { Argon2id } from 'oslo/password';
import { lucia } from '../../lib/auth';

export const loginUser = async (userId: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(userId)
    }
  });
  return Promise.resolve(user);
};
