import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserLogin, UserWithoutPassword } from '../interfaces/user.interface';

dotenv.config();

const createToken = (data: (UserWithoutPassword | UserLogin)) => {
  const token = jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: '2d',
  });
  return token;
};

const validateToken = () => {};

export { createToken, validateToken };