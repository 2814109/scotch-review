import { ChangeEvent, FC, useState } from "react";
import LabelInput from "../../../common/Form/LabelInput";
import CloseButton from "~/components/aspect/admin/common/Form/CloseButton";
import { useRecoilState } from "recoil";
import ScotchFormIsOpen from "~/state/atoms/ScotchFormIsOpen";

const ScotchForm: FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(ScotchFormIsOpen);
  const [formData, setFormData] = useState<any>();
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div
      tabIndex={-1}
      className="h-modal fixed top-0 left-0 right-0 z-50 w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
    >
      <div className="relative h-full w-full p-36 md:h-auto">
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
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <LabelInput
                    labelName="Bottle Name"
                    type="text"
                    value=""
                    name="bottle_name"
                    placeholder=" "
                    required
                    onChange={onChange}
                  />
                </div>

                <div className="group relative z-0 mb-6 w-full">
                  <LabelInput
                    labelName="Limited"
                    type="text"
                    value=""
                    name="limited"
                    placeholder=" "
                    required
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <LabelInput
                    labelName="Price"
                    type="text"
                    value=""
                    name="price"
                    placeholder=" "
                    required
                    onChange={onChange}
                  />
                </div>

                <div className="group relative z-0 mb-6 w-full">
                  <LabelInput
                    labelName="Age"
                    type="number"
                    value=""
                    name="age"
                    placeholder=" "
                    required
                    onChange={onChange}
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>

            <CloseButton setIsOpen={setIsOpen} isOpenState={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScotchForm;
