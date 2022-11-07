import { RowDataPacket } from 'mysql2';
import User, { UserLogin } from '../interfaces/user.interface';
import connection from './connection';

const login = async (user: UserLogin): Promise<User> => {
  const [rows] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE username = ? LIMIT 1',
    [user.username],
  );
  const [findedUser] = rows;
  return findedUser as User;
};

const exportAux = () => {};

export { login, exportAux };