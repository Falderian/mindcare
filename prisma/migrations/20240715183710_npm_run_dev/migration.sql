-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "expires_at" SET DEFAULT now() + interval '1 day';

-- CreateTable
CREATE TABLE "Consultation" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'online',
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "startTime" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
