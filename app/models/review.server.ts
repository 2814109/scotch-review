import { prisma } from "~/db.server";
import type { User, Scotch, Review } from "@prisma/client";

export function createReview({
  star,
  comment,
  userId,
  scotchId,
}: Pick<Review, "star" | "comment"> & { userId: User["id"] } & {
  scotchId: Scotch["id"];
}) {
  return prisma.review.create({
    data: {
      star: star,
      comment: comment,
      user: {
        connect: {
          id: userId,
        },
      },
      scotch: {
        connect: {
          id: scotchId,
        },
      },
    },
  });
}
