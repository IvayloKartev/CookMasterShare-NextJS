/*
  Warnings:

  - You are about to drop the column `category` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `author` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Recipe` DROP COLUMN `category`,
    DROP COLUMN `price`,
    ADD COLUMN `author` VARCHAR(191) NOT NULL,
    ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `date` VARCHAR(191) NOT NULL;
