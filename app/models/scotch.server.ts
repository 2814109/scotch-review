import type { User, Scotch } from "@prisma/client";
import { prisma } from "~/db.server";

export function createNote({
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
