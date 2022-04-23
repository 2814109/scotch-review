-- CreateTable
CREATE TABLE "Scotch" (
    "id" TEXT NOT NULL,
    "bottleName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "limited" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "stars" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scotch_pkey" PRIMARY KEY ("id")
);
