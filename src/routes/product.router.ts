import { Router } from 'express';
import { productController } from '../controllers';

const productRouter = Router();

productRouter.post('/', productController.insertProduct);

export default productRouter;