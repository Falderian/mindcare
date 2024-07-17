import { compareSync, hashSync } from 'bcrypt';
import createError from 'http-errors';
import { SessionService } from './SessionsService';
import prisma from '../../../prisma/prisma';

export type TUser = {
  login: string;
  email: string;
  password: string;
  id?: number;
};

export class UsersService {
  static salt = 10;

  static findUser = async ({ login, id }: Partial<TUser>): Promise<TUser | null> => {
    if (login) return await prisma.user.findUnique({ where: { login } });
    else return await prisma.user.findUnique({ where: { id } });
  };

  static registerUser = async ({ login, email, password }: TUser): Promise<string> => {
    try {
      const existingUser = await this.findUser({ login });

      if (existingUser) throw createError.Conflict('Пользователь с таким логином уже существует.');

      const hashedPassword = this.hashPassword(password);
      await prisma.user.create({
        data: { login, email, password: hashedPassword },
      });

      return 'OK!';
    } catch (error) {
      throw error;
    }
  };

  static async createConsultationsForUser(userId, count) {
    const consultations = Array.from({ length: count }, () => ({
      user_id: userId,
      startTime: new Date(),
    }));

    try {
      await prisma.consultation.createMany({
        data: consultations,
      });
      console.log(`Successfully created ${count} consultations for user with id ${userId}`);
    } catch (error) {
      console.error('Error creating consultations:', error);
    }
  }

  static loginUser = async ({ login, password }: Pick<TUser, 'login' | 'password'>) => {
    try {
      // this.createConsultationsForUser(1, 5000);

      const existingUser = await this.findUser({ login });

      if (!existingUser) throw createError.Conflict('Пользователь с таким логином не найден');

      const isValidPassword = compareSync(password, existingUser.password);

      if (!isValidPassword) throw createError.Conflict('Неверный пароль');

      const { created_at: __, user_id: ___, ...session } = await SessionService.createSession(existingUser.id!);
      const { password: _, ...userWithoutPassword } = existingUser;

      return { user: userWithoutPassword, session };
    } catch (error) {
      throw error;
    }
  };

  static hashPassword = (password: string) => hashSync(password, this.salt);
}
