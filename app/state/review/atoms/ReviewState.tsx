import { atom } from "recoil";
import type { Review } from "@prisma/client";

export type ReviewStateType = Pick<Review, "star" | "comment" | "scotchId">;
export const initValues: ReviewStateType = {
  star: 0,
  comment: "",
  scotchId: "",
};

const ScotchState = atom<ReviewStateType>({
  key: "ScotchState",
  default: initValues,
});

export default ScotchState;
