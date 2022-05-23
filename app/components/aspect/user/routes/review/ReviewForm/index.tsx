import { ChangeEvent, FC, useEffect } from "react";
import { Form, useActionData, useLocation } from "@remix-run/react";

import LabelInput from "../../../../common/Form/LabelInput";
import CloseButton from "~/components/aspect/common/Form/CloseButton";
import { useRecoilState } from "recoil";
import ScotchState, { initValues } from "~/state/scotch/atoms/ScotchState";
import ReviewFormHeader from "./ReviewFormHeader";
import ReviewFormIsOpen from "~/state/review/atoms/ReviewFormIsOpen";
import type { Scotch } from "@prisma/client";
// import { ScotchFormActionData } from "~/types/form/scotch";

const ScotchForm: FC = () => {
  // const actionData = useActionData() as ScotchFormActionData;

  const [isOpen, setIsOpen] = useRecoilState(ReviewFormIsOpen);
  const [formData, setFormData] =
    useRecoilState<
      Pick<Scotch, "id" | "bottleName" | "price" | "age" | "limited">
    >(ScotchState);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const location = useLocation();

  useEffect(() => {
    setFormData(initValues);
  }, [location.key]);

  return (
    <div
      tabIndex={-1}
      className="h-modal fixed top-0 left-0 right-0 z-50 w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
    >
      <div className="relative h-full w-full p-36 md:h-auto">
        <div className="relative rounded-lg bg-white p-8 shadow dark:bg-gray-700">
          <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <ReviewFormHeader />
          </div>
          <div className="space-y-6 p-6">
            <Form method="post" action="/api/scotch/create">
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <LabelInput
                    labelName="Bottle Name"
                    type="text"
                    value={formData.bottleName}
                    name="bottleName"
                    placeholder=" "
                    required
                    onChange={onChange}
                  />
                </div>

                <div className="group relative z-0 mb-6 w-full">
                  <LabelInput
                    labelName="Limited"
                    type="text"
                    value={formData.limited}
                    name="limited"
                    placeholder=" "
                    required={false}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <LabelInput
                    labelName="Price"
                    type="number"
                    value={formData.price}
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
                    value={formData.age}
                    name="age"
                    placeholder=" "
                    required
                    onChange={onChange}
                  />
                </div>
              </div>
              <input
                type="submit"
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                value="Save"
              />
            </Form>
          </div>

          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            <CloseButton setIsOpen={setIsOpen} isOpenState={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScotchForm;
