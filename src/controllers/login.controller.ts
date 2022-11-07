import { Request, Response } from 'express';
import { loginService } from '../services';
import statusCodes from '../utils/statusCode';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await loginService.login({ username, password });
  res.status(statusCodes.OK).json({ token });
};

const exportAux = () => {};

export { login, exportAux };