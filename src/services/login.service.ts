import { UserLogin } from '../interfaces/user.interface';
import { loginModel } from '../models';
import HttpException from '../utils/httpException';
import { createToken } from '../utils/jwt';

const login = async (user: UserLogin): Promise<string> => {
  const findedUser = await loginModel.login(user);
  if (!findedUser || findedUser.password !== user.password) {
    throw new HttpException(401, 'Username or password invalid');
  }
  const { password, ...userWithoutPassword } = findedUser;
  const token = createToken(userWithoutPassword);
  return token;
};

const exportAux = () => {};

export { login, exportAux };