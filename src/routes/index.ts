import { Router } from 'express';
import loginRouter from './login.router';
import productRouter from './product.router';
import userRouter from './user.router';
import orderRouter from './order.router';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/login', loginRouter);
router.use('/orders', orderRouter);

export default router;