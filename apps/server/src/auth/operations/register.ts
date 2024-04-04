import { prisma } from '../../lib/prisma';
import { User } from '@prisma/client';
// import { Argon2id } from 'oslo/password';
import { lucia } from '../../lib/auth';
import * as jwt from 'jsonwebtoken';
import { secret } from '../../config';
import bcrypt from 'bcryptjs';

export function generateJWT(params: any): string {
  const payload = {
    ...params
  };
  return jwt.sign(payload, secret);
}

export const registerUser = async (userAttributes: any): Promise<any> => {
  // const { Argon2id } = await import('oslo/password');
  // const argon2id = new Argon2id();


  // Hash the password using bcryptjs
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userAttributes.password, salt);

  // console.log(hashedPassword);
  const user = await prisma.user.create({
    data: {
      ...userAttributes,
      password: hashedPassword
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
