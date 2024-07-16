import { randomUUID } from 'crypto';
import prisma from '../../../prisma/prisma';
import createHttpError from 'http-errors';
import { UsersService } from './UsersService';

export class SessionService {
  static createSession = async (user_id: number) => {
    const id = randomUUID();

    const session = await this.findSession(user_id);
    if (session) return session;

    prisma.user.update({
      where: { id: user_id },
      data: {
        last_login: new Date(),
        is_active: true,
      },
    });

    return await prisma.session.create({
      data: {
        id,
        user_id,
      },
    });
  };

  static findSession = async (user_id: number) => {
    return await prisma.session.findUnique({ where: { user_id } });
  };

  static authenticate = async (id: string) => {
    const session = await prisma.session.findUnique({ where: { id } });
    if (!session) return createHttpError.Unauthorized('Ваша сессия истекла войдите снова');
    const { user_id } = session;
    const { password: _, ...user } = (await UsersService.findUser({ id: user_id })) as TUser;
    return user;
  };
}
