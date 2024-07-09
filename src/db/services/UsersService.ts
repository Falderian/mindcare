import { executeQuery } from "../db.config";
import createError from "http-errors";

export type TUser = {
  login: string;
  email: string;
  password: string;
  id?: number;
};

export class UsersService {
  findUser = async ({
    login,
    email,
    id,
    password,
  }: Partial<TUser>): Promise<TUser | null> => {
    const clause = id ? "id = $1" : "login = $1 AND email = $2";
    const params = id ? [id] : [login, email];
    const query = `SELECT * FROM users WHERE ${clause};`;

    const result = await executeQuery<TUser>({
      query,
      params,
      returnFirstRowOnly: true,
    });
    return result as TUser | null;
  };

  registerUser = async ({ login, email, password }: TUser): Promise<string> => {
    const existingUser = await this.findUser({ login, email });
    if (existingUser) {
      throw createError.Conflict(
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
  };

  loginUser = async ({
    login,
    password,
  }: Pick<TUser, "login" | "password">) => {
    console.log(login, password);
    const existingUser = await this.findUser({ login, password });
    if (existingUser) {
      console.log(existingUser);
    } else {
      throw createError.Conflict(
        "Пользователь с таким логином и паролем не найден"
      );
    }
  };
}
