import { Router } from 'express';
import { userController } from '../controllers';

const userRouter = Router();

userRouter.post('/', userController.createUser);

export default userRouter;