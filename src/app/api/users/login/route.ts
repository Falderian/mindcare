import { NextRequest, NextResponse } from 'next/server';
import { UsersController } from '../../../../server/controllers/UsersController';
import { SessionService } from '../../../../server/services/SessionsService';
import { cookies } from 'next/headers';

const handler = async (req: Request) => {
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
      const sessionId = cookies().get('sessionId')?.value;
      const result = await SessionService.authenticate(sessionId!);
      return NextResponse.json(result, { status: 201 });
    }
    default:
      return new NextResponse(`Метод ${req.method} не поддерживается`, {
        status: 405,
        headers: { Allow: 'POST' },
      });
  }
};

export { handler as POST, handler as GET };
