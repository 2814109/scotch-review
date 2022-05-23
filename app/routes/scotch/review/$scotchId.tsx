import { FC } from "react";
import { getScotch } from "~/models/scotch.server";
import type { Scotch } from "~/models/scotch.server";
import { json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useCatch, useLoaderData } from "@remix-run/react";
import { MdOutlineHowToVote } from "react-icons/md";
import invariant from "tiny-invariant";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import ReviewFormIsOpen from "~/state/review/atoms/ReviewFormIsOpen";
import ReviewForm from "~/components/aspect/user/routes/review/ReviewForm";

type LoaderData = {
  scotch: Scotch;
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.scotchId, "scotchId not found");

  const scotch = await getScotch({ id: params.scotchId });
  if (!scotch) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ scotch });
};

const ScotchDetailPage: FC = () => {
  const data = useLoaderData() as LoaderData;

  // TODO コンポーネント切り分けの際に状態管理をリファクタリング
  const [isOpen, setIsOpen] = useRecoilState(ReviewFormIsOpen);

  return (
    <>
      <div className="sm:flex sm:justify-center">
        <h1>{data.scotch.bottleName}</h1>
      </div>
      <div className="sm:flex sm:justify-center">
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
      {isOpen && <ReviewForm />}
    </>
  );
};

export default ScotchDetailPage;
