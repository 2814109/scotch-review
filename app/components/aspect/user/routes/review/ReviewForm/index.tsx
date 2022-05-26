import { ChangeEvent, FC, useEffect } from "react";
import { Form, useActionData, useLocation } from "@remix-run/react";
import ActiveRating from "~/components/aspect/common/Rating/ActiveRating";
import LabelInput from "../../../../common/Form/LabelInput";
import CloseButton from "~/components/aspect/common/Form/CloseButton";
import { useRecoilState } from "recoil";
import ScotchState, { initValues } from "~/state/scotch/atoms/ScotchState";
import ReviewFormHeader from "./ReviewFormHeader";
import ReviewFormIsOpen from "~/state/review/atoms/ReviewFormIsOpen";
import type { Review } from "@prisma/client";
import TextArea from "~/components/aspect/common/Form/TextArea";
// import { ScotchFormActionData } from "~/types/form/scotch";
import ReviewState, { ReviewStateType } from "~/state/review/atoms/ReviewState";

type Props = {
  scotchId: string;
};
const ScotchForm: FC<Props> = ({ scotchId }) => {
  // const actionData = useActionData() as ScotchFormActionData;

  const [isOpen, setIsOpen] = useRecoilState(ReviewFormIsOpen);
  const [formData, setFormData] = useRecoilState<ReviewStateType>(ReviewState);
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setFormData({ ...formData, scotchId: scotchId });
  }, []);

  const onChangeStar = (starCount: number) => {
    setFormData({ ...formData, star: starCount });
  };

  console.log(formData);
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
            <Form method="post" action="/api/review/create">
              <input type="hidden" name="scotchId" value={scotchId} />
              <input type="hidden" name="star" value={formData.star} />
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="flex justify-center">
                  <ActiveRating
                    formDataStar={formData.star}
                    setFormDataStar={onChangeStar}
                  />
                </div>

                <div className="group relative z-0 mb-6 w-full">
                  <TextArea
                    label={"comment"}
                    name="comment"
                    value={formData.comment}
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
