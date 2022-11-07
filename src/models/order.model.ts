import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const insertOrder = async (order: Order): Promise<Order> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) values (?)',
    [order.userId],
  );
  const promises = order.productsIds
    .map((productsId) => connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [insertId, productsId],
    ));
  await Promise.all(promises);
  return { id: insertId, ...order } as Order;
};

export { getOrders, insertOrder };