import { prisma } from '../../lib/prisma';
import { User } from '@prisma/client';
import { Argon2id } from 'oslo/password';
import { lucia } from '../../lib/auth';
import * as jwt from "jsonwebtoken";
import { secret } from '../../config';
import bcrypt from 'bcryptjs';

export function generateJWT(params: any): string {
  const payload = {
    ...params
  };
  return jwt.sign(payload, secret);
}

export const loginUser = async (userAttributes: any): Promise<any> => {
  const { email, password } = userAttributes;
  // Find the user by email
  const user = await prisma.user.findUnique({
     where: {
       email: email
     }
  });
 
  if (!user) {
     throw new Error('User not found');
  }
 
  // Verify the password
  // @ts-ignore
  const isPasswordValid = await bcrypt.compare(password, user?.password);
 
  if (!isPasswordValid) {
     throw new Error('Invalid password');
  }
 
  // Generate a JWT token for the user
  const token = generateJWT({ ...user, userId: user.id });
 
  return Promise.resolve({
     token
  });
 };