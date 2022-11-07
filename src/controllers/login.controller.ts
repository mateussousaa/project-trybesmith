import { Request, Response } from 'express';
import { loginService } from '../services';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await loginService.login({ username, password });
  res.status(200).json({ token });
};

const exportAux = () => {};

export { login, exportAux };