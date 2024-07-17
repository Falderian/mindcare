// services/FactoriesService.ts
import { faker } from '@faker-js/faker';
import prisma from '../../../prisma/prisma';
import { createConsultation, createUser } from '../../utils/factories';

export class FactoriesService {
  static async createUsersWithConsultations() {
    console.log('GENERATION');
    const userCount = faker.number.int({ min: 1, max: 1000 });

    for (let i = 0; i < userCount; i++) {
      const user = await this.createUser();

      const consultations = Array.from({ length: 200 }, () => createConsultation(user.id));

      await prisma.consultation.createMany({
        data: consultations,
      });
    }

    console.log(`Created ${userCount} users with consultations`);
  }

  static async createUser() {
    return await prisma.user.create({
      data: await createUser(),
    });
  }

  static async createConsultation(userId: number) {
    return await prisma.consultation.create({
      data: createConsultation(userId),
    });
  }
}
