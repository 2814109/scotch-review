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

export function getIndexScotchListItems() {
  return prisma.scotch.findMany({
    select: { id: true },
    orderBy: { updatedAt: "desc" },
  });
}
