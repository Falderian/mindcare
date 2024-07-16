import { NextResponse } from 'next/server';
import { UsersController } from '../../../../server/controllers/UsersController';

const registerHandler = async (req: Request) => {
  if (req.method === 'POST') {
    try {
      const result = await UsersController.register(req);
      return NextResponse.json(result, { status: 201 });
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    return new NextResponse(`Метод ${req.method} не поддерживается`, {
      status: 405,
      headers: { Allow: 'POST' },
    });
  }
};

export { registerHandler as POST };
