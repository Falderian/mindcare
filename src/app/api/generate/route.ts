import { NextResponse } from 'next/server';
import { FactoriesController } from '../../../server/controllers/FactoriesController';

const generate = async (req: Request) => {
  if (req.method === 'GET') {
    FactoriesController.generateUsersWithConsultations();
    return NextResponse.json(true, { status: 200 });
  } else
    return new NextResponse(`Метод ${req.method} не поддерживается`, {
      status: 405,
      headers: { Allow: 'GET' },
    });
};

export { generate as GET };
