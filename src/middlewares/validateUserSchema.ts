import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import User from '../interfaces/user.interface';
import HttpException from '../utils/httpException';

const validateSchema = (user: User) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(user);
};

const validateUserSchema = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const { error } = validateSchema({ username, classe, level, password });
  if (error && error.details[0].type === 'any.required') {
    throw new HttpException(400, error.details[0].message);
  }
  if (error) throw new HttpException(422, error.details[0].message);
  next();
};

export default validateUserSchema;