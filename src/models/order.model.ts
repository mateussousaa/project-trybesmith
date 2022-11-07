import { RowDataPacket } from 'mysql2';
import Order from '../interfaces/order.interface';
import connection from './connection';

const getOrders = async (): Promise<Order[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>(
    `SELECT ord.id, ord.userId, JSON_ARRAYAGG(pro.id) AS productsIds
    FROM Trybesmith.Orders ord
    INNER JOIN Trybesmith.Products pro
    ON pro.orderId = ord.id
    GROUP BY ord.id`,
  );
  return rows as Order[];
};

const exportAux = () => {};

export { getOrders, exportAux };