import { Request, Response } from 'express';
import { userService } from '../services';
import statusCodes from '../utils/statusCode';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const token = await userService.insertUser({ username, classe, level, password });
  res.status(statusCodes.CREATED).json({ token });
};

const getUsers = () => {};

export { createUser, getUsers };