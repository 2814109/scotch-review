import { prisma } from "~/db.server";
import type { User, Scotch, Review } from "@prisma/client";
export type { Review } from "@prisma/client";

export type ReviewListItem = Omit<Review, "scotchId" | "userId"> & {
  user: Pick<User, "email">;
};

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

export const getReviewListItems = ({
  scotchId,
}: {
  scotchId: Review["scotchId"];
}) => {
  return prisma.review.findMany({
    where: { scotchId: scotchId },
    select: {
      id: true,
      star: true,
      comment: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          email: true,
        },
      },
    },
    orderBy: { updatedAt: "desc" },
  });
};
