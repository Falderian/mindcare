import { NextRequest, NextResponse } from 'next/server';

const getUserConsultations = async (req: NextRequest) => {
  if (req.method === 'GET') {
    console.log(req);
  } else
    return new NextResponse(`Метод ${req.method} не поддерживается`, {
      status: 405,
      headers: { Allow: 'POST' },
    });
};

export { getUserConsultations as GET };
