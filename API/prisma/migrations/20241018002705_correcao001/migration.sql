/*
  Warnings:

  - Made the column `data_nascimento` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "usuario" ALTER COLUMN "data_nascimento" SET NOT NULL;
