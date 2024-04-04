import { prisma } from '../../lib/prisma';
import { User } from '@prisma/client';
import { Argon2id } from 'oslo/password';
import { lucia } from '../../lib/auth';
import * as jwt from "jsonwebtoken";
import { secret } from '../../config';

export function generateJWT(params: any): string {
  const payload = {
    hello: "world"
  };
  return jwt.sign(payload, secret);
}

export const loginUser = async (userId: string): Promise<any> => {

  const token = generateJWT("hello");
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: parseInt(userId)
  //   }
  // });
  return Promise.resolve({

    token
  });
};
