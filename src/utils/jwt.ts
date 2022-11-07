import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserLogin, UserWithoutPassword } from '../interfaces/user.interface';
import HttpException from './httpException';

dotenv.config();

const createToken = (data: (UserWithoutPassword | UserLogin)) => {
  const token = jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: '2d',
  });
  return token;
};

const validateToken = (token: string) => {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET as string);
    return data;
  } catch (e) {
    throw new HttpException(401, 'Invalid token');
  }
};

export { createToken, validateToken };