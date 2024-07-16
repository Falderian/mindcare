import { NextResponse } from 'next/server';
import { ConsultationsController } from '../../../../server/controllers/ConsultationsController';

const getUserConsultations = async (req: Request, { params }: { params: { id: string } }) => {
  if (req.method === 'GET') {
    const { id } = params;
    const result = await ConsultationsController.getUserConsultations(+id);
    return NextResponse.json(result, { status: 200 });
  } else
    return new NextResponse(`Метод ${req.method} не поддерживается`, {
      status: 405,
      headers: { Allow: 'GET' },
    });
};

export { getUserConsultations as GET };
