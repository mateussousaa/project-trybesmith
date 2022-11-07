import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/user.interface';
import connection from './connection';

const insertUser = async (user: User): Promise<User> => {
  const columns: string = Object.keys(user)
    .map((p) => `${p}`)
    .join(', ');

  const placeholders: string = Object.keys(user)
    .map((_p) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Users (${columns}) values (${placeholders})`,
    [...Object.values(user)],
  );
  return { id: insertId, ...user } as User;
};

const getUsers = () => {};

export { insertUser, getUsers };