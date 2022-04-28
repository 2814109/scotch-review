import { FC } from "react";
import ScotchForm from "~/components/aspect/admin/routes/scotch/ScotchForm";
import SearchContent from "~/components/aspect/admin/routes/scotch/SearchContent";
import { RecoilRoot, useRecoilValue } from "recoil";
import ScotchFormIsOpen from "~/state/atoms/ScotchFormIsOpen";

const ScotchIndex: FC = () => {
  const isOpen = useRecoilValue(ScotchFormIsOpen);
  const scotchList = [...Array(10)].map((_, index) => {
    return { id: index };
  });
  return (
    <>
      <SearchContent />

      {scotchList.map((_) => {
        return <h1>title</h1>;
      })}
      {isOpen && <ScotchForm />}
    </>
  );
};

export default ScotchIndex;
