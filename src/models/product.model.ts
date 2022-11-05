import { ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';
import connection from './connection';

const insertProduct = async (product: Product): Promise<Product> => {
  const columns: string = Object.keys(product)
    .map((p) => `${p}`)
    .join(', ');

  const placeholders: string = Object.keys(product)
    .map((_p) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products (${columns}) values (${placeholders})`,
    [...Object.values(product)],
  );
  return { id: insertId, ...product };
};

const getProducts = () => {};

export { insertProduct, getProducts };