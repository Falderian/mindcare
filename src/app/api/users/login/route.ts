import { NextRequest, NextResponse } from 'next/server';
import { UsersController } from '../../../../server/controllers/UsersController';

const handler = async (req: NextRequest) => {
  switch (req.method) {
    case 'POST':
      try {
        const result = await UsersController.login(req);
        return NextResponse.json(result, { status: 201 });
      } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.toString() }, { status: 500 });
      }
    case 'GET': {
      const sessionId = req.cookies.get('sessionId')?.value;
      return NextResponse.json(sessionId, { status: 201 });
    }
    default:
      return new NextResponse(`Метод ${req.method} не поддерживается`, {
        status: 405,
        headers: { Allow: 'POST' },
      });
  }
};

export { handler as POST, handler as GET };
