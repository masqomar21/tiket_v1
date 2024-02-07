-- CreateEnum
CREATE TYPE "Role" AS ENUM ('basic user', 'admin wisata', 'admin keuangan', 'super admin');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('created', 'pending', 'settlement', 'expired', 'done', 'canceled');

-- CreateTable
CREATE TABLE "users_account" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'basic user',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "users_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_data" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT,
    "profile" TEXT,
    "user_account_id" UUID NOT NULL,

    CONSTRAINT "user_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_access" (
    "id" SERIAL NOT NULL,
    "access_token" TEXT NOT NULL,
    "remember_me" SMALLINT NOT NULL DEFAULT 0,
    "user_account_id" UUID NOT NULL,

    CONSTRAINT "user_access_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login_device" (
    "id" SERIAL NOT NULL,
    "device_name" TEXT NOT NULL,
    "user_account_id" UUID NOT NULL,

    CONSTRAINT "login_device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Otp" (
    "id" SERIAL NOT NULL,
    "otp" TEXT,
    "user_account_id" UUID NOT NULL,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_account_email_key" ON "users_account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_data_user_account_id_key" ON "user_data"("user_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_access_user_account_id_key" ON "user_access"("user_account_id");

-- AddForeignKey
ALTER TABLE "user_data" ADD CONSTRAINT "user_data_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "users_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_access" ADD CONSTRAINT "user_access_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "users_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login_device" ADD CONSTRAINT "login_device_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "users_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Otp" ADD CONSTRAINT "Otp_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "users_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
