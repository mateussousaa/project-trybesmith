import Order from '../interfaces/order.interface';
import { orderModel } from '../models';

const getOrders = async () => orderModel.getOrders();

const insertOrder = async (order: Order) => orderModel.insertOrder(order);

export { getOrders, insertOrder };