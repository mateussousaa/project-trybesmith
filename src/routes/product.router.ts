import { Router } from 'express';
import { productController } from '../controllers';
import validateProductSchema from '../middlewares/validateProductSchema';

const productRouter = Router();

productRouter.post('/', validateProductSchema, productController.insertProduct);

productRouter.get('/', productController.getProducts);

export default productRouter;