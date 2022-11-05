import { Request, Response } from 'express';
import { productService } from '../services';
import statusCodes from '../utils/statusCode';

const insertProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const insertedProduct = await productService.insertProduct({ name, amount });
  res.status(statusCodes.CREATED).json(insertedProduct);
};

const getProducts = () => {};

export { insertProduct, getProducts };