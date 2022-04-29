import { FC } from "react";
import ScotchForm from "~/components/aspect/admin/routes/scotch/ScotchForm";
import SearchContent from "~/components/aspect/admin/routes/scotch/SearchContent";
import { useRecoilValue } from "recoil";
import ScotchFormIsOpen from "~/state/atoms/ScotchFormIsOpen";

const ScotchIndex: FC = () => {
  const isOpen = useRecoilValue(ScotchFormIsOpen);

  return (
    <>
      <SearchContent />

      {isOpen && <ScotchForm />}
    </>
  );
};

export default ScotchIndex;
