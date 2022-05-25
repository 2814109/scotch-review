import { atom } from "recoil";

const ScotchSearchKeywordState = atom<string>({
  key: "ScotchSearchKeywordState",
  default: "",
});
export default ScotchSearchKeywordState;
