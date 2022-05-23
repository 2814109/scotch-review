import { FC } from "react";
import { Scotch } from "@prisma/client";
import RatingIcon from "~/components/aspect/common/RatingIcon";
import { Link } from "@remix-run/react";

type Props = {
  scotch: Omit<Scotch, "userId">;
};
const ScotchCard: FC<Props> = ({ scotch }) => {
  return (
    <Link to={`/scotch/review/${scotch.id}`}>
      <div className="h-64 overflow-hidden rounded shadow-lg">
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">
            {scotch.bottleName} {scotch.age > 0 && `${scotch.age} 年`}
          </div>
          <RatingIcon starCount={scotch.stars} />
          <p className="text-base">Limited:{scotch.limited}</p>

          <p className="text-base text-gray-700">
            Price:{`¥${scotch.price.toLocaleString()}`}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default ScotchCard;
