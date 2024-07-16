import createHttpError from 'http-errors';
import { ConsultationsService } from '../services/ConsultationsService';

export class ConsultationsController {
  static getUserConsultations = async (id: number) => {
    if (!id) throw createHttpError.BadRequest('Отуствует поле id');
    else {
      return await ConsultationsService.getUserConsultations(id);
    }
  };
}
