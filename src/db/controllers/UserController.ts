// src/controllers/UserController.ts
import { NextResponse } from "next/server";
import { UserService } from "../services/UserService";

type TUserRegister = {
  username: string;
  email: string;
  password: string;
};

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async register({ username, email, password }: TUserRegister) {
    if (username && email && password) {
      try {
        const existingUser = await this.userService.findUser(username, email);

        if (existingUser) {
          return NextResponse.json(
            {
              message:
                "Пользователь с таким именем или электронной почтой уже существует",
            },
            { status: 409 }
          );
        }

        await this.userService.createUser(username, email, password);

        return NextResponse.json({ message: "Регистрация прошла успешно" });
      } catch (error) {
        console.error("Error during registration:", error);

        return NextResponse.json(
          { message: "Ошибка регистрации. Пожалуйста, попробуйте еще раз." },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "Ошибка регистрации. Проверьте введенные данные." },
        { status: 403 }
      );
    }
  }
}
