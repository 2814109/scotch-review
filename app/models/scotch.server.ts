import type { User, Scotch, Review } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Scotch } from "@prisma/client";

export type ScotchDetail = Omit<Scotch, "userId"> & {
  reviews: Pick<Review, "star">[];
};
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
    select: {
      id: true,
      bottleName: true,
      age: true,
      price: true,
      limited: true,
      createdAt: true,
      updatedAt: true,
      reviews: {
        select: {
          star: true,
        },
      },
    },
    orderBy: { updatedAt: "desc" },
  });
}

export function deleteScotch({ id }: Pick<Scotch, "id">) {
  return prisma.scotch.deleteMany({
    where: { id },
  });
}

export const getScotch = ({ id }: Pick<Scotch, "id">) => {
  return prisma.scotch.findFirst({
    where: { id },
    select: {
      id: true,
      bottleName: true,
      age: true,
      price: true,
      limited: true,
      createdAt: true,
      updatedAt: true,
      reviews: {
        select: {
          star: true,
        },
      },
    },
  });
};
