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
      <div className="sm:flex sm:justify-center">
        <h1>{data.scotch.bottleName}</h1>
      </div>
      <CreateButton />
      {isOpen &&
        (user ? (
          <ReviewForm scotchId={data.scotch.id} />
        ) : (
          <ConfirmationModal />
        ))}
      <div className="sm:flex sm:justify-center">
        <div>
          {data.reviews.map((review) => {
            return <h1>{review.star}</h1>;
          })}
        </div>
      </div>
    </>
  );
};

export default ScotchDetailPage;
