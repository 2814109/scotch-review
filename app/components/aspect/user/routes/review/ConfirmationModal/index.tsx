import { FC } from "react";
import CloseButton from "~/components/aspect/common/Form/CloseButton";
import { useRecoilState } from "recoil";
import ConfirmationFormHeader from "./ConfirmationModalHeader";
import ReviewFormIsOpen from "~/state/review/atoms/ReviewFormIsOpen";
import { Link } from "react-router-dom";

const ConfirmationModal: FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(ReviewFormIsOpen);

  return (
    <div
      tabIndex={-1}
      className="h-modal fixed top-0 left-0 right-0 z-50 w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
    >
      <div className="relative h-full w-full p-36 md:h-auto">
        <div className="relative rounded-lg bg-white p-8 shadow dark:bg-gray-700">
          <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <ConfirmationFormHeader />
          </div>
          <div className="flex justify-center">
            <h1 className="m-3 text-white">会員登録が必要です</h1>
          </div>
          <div className="m-3 flex justify-center">
            <Link
              to="/join"
              className="m-3 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            >
              新規会員登録はこちら
            </Link>

            <Link
              to="/login"
              className="m-3 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            >
              既に会員の方はこちら
            </Link>
          </div>
          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            <CloseButton setIsOpen={setIsOpen} isOpenState={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationModal;
