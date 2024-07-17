import prisma from '../../../prisma/prisma';

export class ConsultationsService {
  static getUserConsultations = async (user_id: number) => {
    return await prisma.consultation.findMany({ where: { user_id } });
  };
}
