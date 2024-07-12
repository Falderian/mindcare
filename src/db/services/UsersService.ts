import { compareSync, hashSync } from 'bcrypt';
import { executeQuery } from '../db.config';
import createError from 'http-errors';
import { QueryBuilder } from '../utils/QueryBuilder';

export type TUser = {
  login: string;
  email: string;
  password: string;
  id?: number;
};

export class UsersService {
  salt = 10;

  findUser = async ({ login }: Partial<TUser>): Promise<TUser | null> => {
    const clause = 'login = $1';
    const params = [login];
    const query = `
      SELECT * FROM users WHERE ${clause};
    `;

    const result = await executeQuery<TUser>({
      query,
      params,
      returnFirstRowOnly: true,
    });
    return result as TUser | null;
  };

  registerUser = async ({ login, email, password }: TUser): Promise<null> => {
    const existingUser = await this.findUser({ login });
    if (existingUser) {
      throw createError.Conflict('Пользователь с таким логином или email уже существует.');
    } else {
      const query = `
        INSERT INTO users (login, email, password)
        VALUES ($1, $2, $3);
      `;
      const hashedPassword = this.hashPassword(password);
      const params = [login, email, hashedPassword];
      await executeQuery({ query, params });
      return null;
    }
  };

  loginUser = async ({ login, password }: Pick<TUser, 'login' | 'password'>) => {
    const existingUser = await this.findUser({ login });
    if (existingUser) {
      const isValidPassword = compareSync(password, existingUser?.password);
      if (!isValidPassword) throw createError.Conflict('Неверный пароль');

      const dto = {
        last_login: new Date().toISOString(),
        is_active: true,
      };
      const updateQuery = QueryBuilder.buildUpdateQuery('users', 'login', login, dto);
      await executeQuery({ query: updateQuery });

      return { ...existingUser, password: null };
    } else {
      throw createError.Conflict('Пользователь с таким логином не найден');
    }
  };

  hashPassword = (password: string) => hashSync(password, this.salt);
}
