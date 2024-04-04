import { prisma } from '../../lib/prisma';
import { User } from '@prisma/client';
// import { Argon2id } from 'oslo/password';
import { lucia } from '../../lib/auth';
import * as jwt from "jsonwebtoken";
import { secret } from '../../config';

export function generateJWT(params: any): string {
  const payload = {
    ...params
  };
  return jwt.sign(payload, secret);
}

export const registerUser = async (userAttributes: any): Promise<any> => {
  const { Argon2id } = await import('oslo/password');
  const argon2id = new Argon2id();
  console.log(argon2id);
  // const hashedPassword = await argon2id.hash(userAttributes.password);

  // console.log(hashedPassword);
  const user = await prisma.user.create({
    data: {
      ...userAttributes,
      // password: hashedPassword
    }
  });

  const token = generateJWT({
    ...user
  });
  return Promise.resolve({
    ...user,
    token
  });
};
