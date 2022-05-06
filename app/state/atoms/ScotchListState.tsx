import { atom } from "recoil";
import type { Scotch } from "@prisma/client";

const ScotchListState = atom<Omit<Scotch, "userId">[]>({
  key: "ScotchListState",
  default: [],
});

export default ScotchListState;
