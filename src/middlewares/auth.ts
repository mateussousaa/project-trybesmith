import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/httpException';
import { validateToken } from '../utils/jwt';

const authMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) throw new HttpException(401, 'Token not found');
  const data = validateToken(authorization);
  req.body.user = data;
  next();
};

export default authMiddleware;