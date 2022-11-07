import { Request, Response } from 'express';
import { orderService } from '../services';

const getOrders = async (req: Request, res: Response) => {
  const orders = await orderService.getOrders();
  res.status(200).json(orders);
};

const exportAux = () => {};

export { getOrders, exportAux };