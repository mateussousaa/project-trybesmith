import { orderModel } from '../models';

const getOrders = async () => orderModel.getOrders();

const exportAux = () => {};

export { getOrders, exportAux };