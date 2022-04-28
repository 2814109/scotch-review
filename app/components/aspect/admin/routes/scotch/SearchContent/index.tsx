import { FC } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { RecoilRoot, useRecoilState } from "recoil";
import ScotchFormIsOpen from "~/state/atoms/ScotchFormIsOpen";

const SearchContent: FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(ScotchFormIsOpen);

  return (
    <div className="flex items-center border-b border-teal-500 py-2">
      <BiSearchAlt />
      <input
        className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
        type="text"
        placeholder="Label Name"
        aria-label="Scotch Name"
      />
      <button
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        data-modal-toggle="defaultModal"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Create
      </button>
    </div>
  );
};

export default SearchContent;
