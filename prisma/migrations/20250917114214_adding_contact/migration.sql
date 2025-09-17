-- CreateEnum
CREATE TYPE "public"."ContactType" AS ENUM ('INSTAGRAM', 'WHATSAPP', 'EMAIL');

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" SERIAL NOT NULL,
    "type" "public"."ContactType" NOT NULL,
    "title" TEXT NOT NULL,
    "info" TEXT[],
    "url" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
