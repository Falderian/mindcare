/*
  Warnings:

  - You are about to drop the column `userId` on the `Consultation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_userId_fkey";

-- AlterTable
ALTER TABLE "Consultation" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER;

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "expires_at" SET DEFAULT NOW() + interval '1 day';

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
