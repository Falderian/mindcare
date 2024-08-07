import { UsersService } from '../services/UsersService';
import createError from 'http-errors';

export class UsersController {
  static register = async (req: Request) => {
    const { login, email, password } = await req.json();
    if (!login || !email || !password) {
      throw createError(400, 'Отсутствуют обязательные поля: login, email или password');
    }
    return await UsersService.registerUser({ login, email, password });
  };

  static login = async (req: Request) => {
    const { login, password } = await req.json();
    if (!login || !password) {
      throw createError(400, 'Отсутствуют обязательные поля: login или password');
    } else {
      return await UsersService.loginUser({ login, password });
    }
  };
}
