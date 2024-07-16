import { NextResponse } from 'next/server';

const getUserConsultations = async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    console.log(req);
  } else
    return new NextResponse(`Метод ${req.method} не поддерживается`, {
      status: 405,
      headers: { Allow: 'GET' },
    });
};

export { getUserConsultations as GET };
