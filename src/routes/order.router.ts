import { Router } from 'express';
import { orderController } from '../controllers';
import authMiddleware from '../middlewares/auth';
import validateOrderSchema from '../middlewares/validateOrderSchema';

const orderRouter = Router();

orderRouter.get('/', orderController.getOrders);

orderRouter.post('/', authMiddleware, validateOrderSchema, orderController.insertOrder);

export default orderRouter;