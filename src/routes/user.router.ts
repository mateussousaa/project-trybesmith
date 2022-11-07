import { Router } from 'express';
import { userController } from '../controllers';
import validateUserSchema from '../middlewares/validateUserSchema';

const userRouter = Router();

userRouter.post('/', validateUserSchema, userController.createUser);

export default userRouter;