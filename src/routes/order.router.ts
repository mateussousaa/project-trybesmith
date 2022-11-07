import { Router } from 'express';
import { orderController } from '../controllers';

const orderRouter = Router();

orderRouter.get('/', orderController.getOrders);

export default orderRouter;