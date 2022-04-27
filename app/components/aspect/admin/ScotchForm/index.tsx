import { FC } from "react";

type ScotchFormProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};
const ScotchForm: FC<ScotchFormProps> = ({ setIsOpen, isOpen }) => {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      className="h-modal fixed top-0 left-0 right-0 z-50 w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
    >
      <div className="relative h-full w-full p-24 md:h-auto">
        <div className="relative rounded-lg bg-white p-8 shadow dark:bg-gray-700">
          <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Scotch Form
            </h3>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="space-y-6 p-6">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="bottle_name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Bottle Name
                </label>
                <input
                  type="text"
                  id="bottle_name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Bottle Name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="¥10,000"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="age"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="12"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="limited"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Limited
                </label>
                <input
                  type="text"
                  id="limited"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Supernova"
                  required
                />
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-modal-toggle="defaultModal"
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScotchForm;
