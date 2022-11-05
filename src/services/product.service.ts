import Product from '../interfaces/product.interface';
import { productModel } from '../models';

const insertProduct = async (product: Product): Promise<Product> => {
  const insertedProduct: Product = await productModel.insertProduct(product);
  return insertedProduct;
};

const getProducts = () => {};

export { insertProduct, getProducts };