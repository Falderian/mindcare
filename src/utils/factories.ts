// utils/factories.ts
import { faker } from '@faker-js/faker';
import { User } from '@prisma/client';
import prisma from '../../prisma/prisma';

export const createUser = async () => {
  let login = faker.internet.userName();

  while (await prisma.user.findUnique({ where: { login } })) {
    login = faker.internet.userName();
  }

  return {
    login,
    email: faker.internet.email(),
    password: faker.internet.password(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    created_at: faker.date.past(),
    updated_at: new Date(),
    last_login: new Date(),
    is_active: true,
  };
};

export const createConsultation = (userId: number) => ({
  type: 'online',
  completed: faker.datatype.boolean(),
  startTime: faker.date.future(),
  created_at: new Date(),
  user_id: userId,
});
