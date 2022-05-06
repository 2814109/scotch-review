import type { User, Scotch } from "@prisma/client";
import { prisma } from "~/db.server";

export function createScotch({
  bottleName,
  price,
  age,
  limited,
  userId,
}: Pick<Scotch, "bottleName" | "price" | "age" | "limited"> & {
  userId: User["id"];
}) {
  return prisma.scotch.create({
    data: {
      stars: 0,
      bottleName,
      price,
      age,
      limited,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

// id: string;
// bottleName: string;
// age: number;
// limited: string;
// price: number;
// stars: number;
// createdAt: Date;
// updatedAt: Date;
export function getIndexScotchListItems() {
  return prisma.scotch.findMany({
    select: {
      id: true,
      bottleName: true,
      age: true,
      price: true,
      limited: true,
      stars: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: { updatedAt: "desc" },
  });
}
