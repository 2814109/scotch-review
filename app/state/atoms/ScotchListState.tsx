import { atom } from "recoil";
import type { Scotch } from "@prisma/client";

const ScotchListState = atom<Scotch[]>({
  key: "ScotchListState",
  default: [],
});

export default ScotchListState;
