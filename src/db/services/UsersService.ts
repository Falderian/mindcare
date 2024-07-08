import { executeQuery } from "../db.config";
import { QueryResultRow } from "pg";
import createError from "http-errors";

export type TUser = {
  login: string;
  email: string;
  password: string;
  id?: number;
};

export class UsersService {
  async findUser({ login, email, id }: Partial<TUser>): Promise<TUser | null> {
    const clause = id ? "id = $1" : "login = $1 AND email = $2";
    const params = id ? [id] : [login, email];
    const query = `SELECT * FROM users WHERE ${clause};`;

    const result = await executeQuery<TUser>({
      query,
      params,
      returnFirstRowOnly: true,
    });
    return result as TUser | null;
  }

  async registerUser({ login, email, password }: TUser): Promise<string> {
    const existingUser = await this.findUser({ login, email });
    if (existingUser) {
      throw createError(
        409,
        "Пользователь с таким логином или email уже существует."
      );
    } else {
      const query = `
        INSERT INTO users (login, email, password)
        VALUES ($1, $2, $3)
      `;
      const params = [login, email, password];
      await executeQuery({ query, params });
      return "Регистрация успешна!";
    }
  }
}
