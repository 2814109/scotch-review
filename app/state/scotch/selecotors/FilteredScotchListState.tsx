import { selector } from "recoil";
import ScotchListState from "../atoms/ScotchListState";
import ScotchSearchKeywordState from "../atoms/ScotchSearchKeyword";
const filteredScotchListState = selector({
  key: "FilteredScotchListState",
  get: ({ get }) => {
    const scotchList = get(ScotchListState);
    const searchKeyword = get(ScotchSearchKeywordState);

    return searchKeyword
      ? scotchList.filter((scotchData) =>
          scotchData.bottleName.includes(searchKeyword)
        )
      : scotchList;
  },
  //   set: ({set}, keyword) => {}
});

export default filteredScotchListState;
