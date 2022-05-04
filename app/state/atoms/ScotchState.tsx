import { atom } from "recoil";
import type { Scotch } from "@prisma/client";

export const initValues = {
  id: "",
  bottleName: "",
  limited: "",
  price: 0,
  age: 0,
};

const ScotchState = atom<
  Pick<Scotch, "id" | "bottleName" | "age" | "price" | "limited">
>({
  key: "ScotchState",
  default: initValues,
});

export default ScotchState;
