import { FactoriesService } from '../services/FactoriesService';

export class FactoriesController {
  static generateUsersWithConsultations = async () => {
    try {
      FactoriesService.createUsersWithConsultations();
    } catch (error) {
      console.error('Error creating user with consultations:', error);
    }
  };
}
