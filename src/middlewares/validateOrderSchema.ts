import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/user.interface';
import HttpException from '../utils/httpException';

const validateOrderSchema = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds }: { productsIds: number[], user: User } = req.body;
  if (!productsIds) throw new HttpException(400, '"productsIds" is required');
  if (!Array.isArray(productsIds)) throw new HttpException(422, '"productsIds" must be an array');
  if (!productsIds.length) throw new HttpException(422, '"productsIds" must include only numbers');
  next();
};

export default validateOrderSchema;