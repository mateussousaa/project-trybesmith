import { Router } from 'express';
import { loginController } from '../controllers';
import validateLoginSchema from '../middlewares/validateLoginSchema';

const loginRouter = Router();

loginRouter.post('/', validateLoginSchema, loginController.login);

export default loginRouter;