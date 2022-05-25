/*
  Warnings:

  - Added the required column `userId` to the `Scotch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Scotch" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Scotch" ADD CONSTRAINT "Scotch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
