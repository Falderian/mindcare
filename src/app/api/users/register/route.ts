import { NextRequest, NextResponse } from "next/server";
import { UsersController } from "../../../../db/controllers/UsersController";
import createError from "http-errors";

const registerHandler = async (req: NextRequest) => {
  if (req.method === "POST") {
    try {
      const result = await UsersController.register(req);
      return NextResponse.json({ message: result }, { status: 201 });
    } catch (error: unknown) {
      if (createError.isHttpError(error)) {
        return NextResponse.json(
          { error: error.message },
          { status: error.statusCode }
        );
      } else {
        return NextResponse.json(
          { error: "Внутренняя ошибка сервера" },
          { status: 500 }
        );
      }
    }
  } else {
    return new NextResponse(`Метод ${req.method} не поддерживается`, {
      status: 405,
      headers: { Allow: "POST" },
    });
  }
};

export { registerHandler as POST };
