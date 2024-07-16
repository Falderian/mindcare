import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

const deleteExpiredSessions = async () => {
  const result = await prisma.session.deleteMany({
    where: {
      expires_at: {
        lt: new Date(),
      },
    },
  });
  console.log(`Deleted ${result.count} expired sessions`);
};

setInterval(deleteExpiredSessions, 24 * 60 * 60 * 100);

export default prisma;
