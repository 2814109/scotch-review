import { FC, useEffect } from "react";
import { getScotch } from "~/models/scotch.server";
import type { Scotch } from "~/models/scotch.server";
import { Review } from "~/models/review.server";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { MdOutlineHowToVote } from "react-icons/md";
import invariant from "tiny-invariant";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import ReviewFormIsOpen from "~/state/review/atoms/ReviewFormIsOpen";
import ReviewForm from "~/components/aspect/user/routes/review/ReviewForm";
import ConfirmationModal from "~/components/aspect/user/routes/review/ConfirmationModal";
import { useOptionalUser } from "~/utils";
import CreateButton from "~/components/aspect/user/routes/review/CreateButton";
import { useLocation } from "@remix-run/react";
import { getReviewListItems } from "~/models/review.server";
import { ReviewListItem } from "~/models/review.server";
import RatingIcon from "~/components/aspect/common/Rating/RatingIcon";
type LoaderData = {
  scotch: Scotch;
  reviews: ReviewListItem[];
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.scotchId, "scotchId not found");

  const scotch = await getScotch({ id: params.scotchId });
  if (!scotch) {
    throw new Response("Not Found", { status: 404 });
  }

  const reviews = await getReviewListItems();
  if (!reviews) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ scotch, reviews });
};

const ScotchDetailPage: FC = () => {
  const data = useLoaderData() as LoaderData;
  const [isOpen, setIsOpen] = useRecoilState(ReviewFormIsOpen);
  const user = useOptionalUser();

  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.key]);
  return (
    <>
      <div className="flex justify-center">
        <h1>{data.scotch.bottleName}</h1>
      </div>
      <div className="m-3">
        <CreateButton />
        {isOpen &&
          (user ? (
            <ReviewForm scotchId={data.scotch.id} />
          ) : (
            <ConfirmationModal />
          ))}
      </div>
      <div className="flex justify-center">
        <div>
          {data.reviews.map((review) => {
            return (
              <div key={review.id}>
                <div className="w-full max-w-sm lg:flex lg:max-w-full">
                  <div className="m-2 flex flex-col justify-between rounded rounded-b  rounded-b-none border-r border-b border-l border-t border-gray-400 border-gray-400 bg-white p-4 leading-normal">
                    <div className="mb-8">
                      <p className="flex items-center text-sm text-gray-600">
                        {user?.email}
                      </p>
                      <div className="mb-2 text-xl font-bold text-gray-900">
                        <RatingIcon starCount={review.star} />
                      </div>
                      <p className="text-base text-gray-700">
                        {review.comment}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="leading-none text-gray-900">
                          {review.createdAt}
                        </p>
                        <p className="leading-none text-gray-900">
                          {review.updatedAt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ScotchDetailPage;
