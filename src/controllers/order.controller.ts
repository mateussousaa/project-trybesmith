import { Request, Response } from 'express';
import User from '../interfaces/user.interface';
import { orderService } from '../services';
import statusCodes from '../utils/statusCode';

const getOrders = async (req: Request, res: Response) => {
  const orders = await orderService.getOrders();
  res.status(statusCodes.OK).json(orders);
};

const insertOrder = async (req: Request, res: Response) => {
  const { productsIds, user }: { productsIds: number[], user: User } = req.body;
  const order = await orderService.insertOrder({ userId: user.id as number, productsIds });
  res.status(statusCodes.CREATED).json({
    userId: order.userId,
    productsIds: order.productsIds,
  });
};

export { getOrders, insertOrder };