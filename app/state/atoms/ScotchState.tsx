import { atom } from "recoil";
import type { Scotch } from "@prisma/client";

const ScotchState = atom<
  Pick<Scotch, "id" | "bottleName" | "age" | "price" | "limited">
>({
  key: "ScotchState",
  default: {
    id: "",
    bottleName: "",
    limited: "",
    price: 0,
    age: 0,
  },
});

export default ScotchState;
