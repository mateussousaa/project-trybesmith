import User from '../interfaces/user.interface';
import { userModel } from '../models';
import { createToken } from '../utils/jwt';

const insertUser = async (user: User) => {
  const insertedUser = await userModel.insertUser(user);
  const { password, ...userWithoutPassword } = insertedUser;
  const token = createToken(userWithoutPassword);
  return token;
};

const getUsers = () => {};

export { insertUser, getUsers };