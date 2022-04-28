import { FC } from "react";

type CloseButtonProps = {
  setIsOpen: (isOpenState: boolean) => void;
  isOpenState: boolean;
};
const CloseButton: FC<CloseButtonProps> = ({ setIsOpen, isOpenState }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpenState)}
      type="button"
      className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
    >
      Close
    </button>
  );
};
export default CloseButton;
