import { NextRequest } from "next/server";
import { UsersService } from "../services/UsersService";
import createError from "http-errors";

export class UsersController {
  static usersService = new UsersService();

  static register = async (req: NextRequest) => {
    const { login, email, password } = await req.json();
    if (!login || !email || !password) {
      throw createError(
        400,
        "Отсутствуют обязательные поля: login, email или password"
      );
    }
    return this.usersService.registerUser({ login, email, password });
  };
}
