import { FC } from "react";
import { MdOutlineHowToVote } from "react-icons/md";
import { useRecoilState } from "recoil";
import ReviewFormIsOpen from "~/state/review/atoms/ReviewFormIsOpen";

const CreateButton: FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(ReviewFormIsOpen);

  return (
    <div className="flex justify-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        <div className="flex items-center p-1">
          <span className="mr-2">Create Review</span>
          <MdOutlineHowToVote />
        </div>
      </button>
    </div>
  );
};

export default CreateButton;
