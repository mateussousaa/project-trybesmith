import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import Product from '../interfaces/product.interface';
import HttpException from '../utils/httpException';

const validateSchema = (product: Product) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });
  return schema.validate(product);
};

const validateProductSchema = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  
  const { error } = validateSchema({ name, amount });

  if (error && error.details[0].type === 'any.required') {
    throw new HttpException(400, error.details[0].message);
  }
  if (error) throw new HttpException(422, error.details[0].message);
  next();
};

export default validateProductSchema;