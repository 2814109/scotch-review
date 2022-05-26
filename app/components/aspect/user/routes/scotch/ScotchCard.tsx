import { FC } from "react";
import RatingIcon from "~/components/aspect/common/Rating/RatingIcon";
import { Link } from "@remix-run/react";
import { ScotchDetail } from "~/models/scotch.server";
type Props = {
  scotch: ScotchDetail;
};
const ScotchCard: FC<Props> = ({ scotch }) => {
  const countStars = scotch.reviews.reduce((sum, { star }) => {
    return sum + star;
  }, 0);
  const average = Number.isNaN(countStars / scotch.reviews.length)
    ? 0
    : countStars / scotch.reviews.length;
  return (
    <div className="">
      <Link to={`/scotch/review/${scotch.id}`}>
        <div className="h-64 overflow-hidden rounded shadow-lg">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
              {scotch.bottleName} {scotch.age > 0 && `${scotch.age} 年`}
            </div>
            <div className="flex items-center justify-center">
              <RatingIcon starCount={Math.floor(average)} />
              <span className="m-1">{Math.floor(average * 100) / 100}</span>
              <span>{`(${scotch.reviews.length})`}</span>
            </div>
            <p className="text-base">Limited:{scotch.limited}</p>

            <p className="text-base text-gray-700">
              Price:{`¥${scotch.price.toLocaleString()}`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ScotchCard;
