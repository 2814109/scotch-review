import { FC } from "react";
import DarkStar from "./Icon/DarkStar";
import BrightStar from "./Icon/BrightStar";
type RatingIconProps = {
  starCount: number;
};
const RatingIcon: FC<RatingIconProps> = ({ starCount }) => {
  const MAX_STAR_COUNT = 5;

  return (
    <ul className="flex justify-center">
      {[...Array(starCount)].map((_, index) => {
        return (
          <li key={index}>
            <BrightStar />
          </li>
        );
      })}

      {[...Array(MAX_STAR_COUNT - starCount)].map((_, index) => {
        return (
          <li key={index}>
            <DarkStar />
          </li>
        );
      })}
    </ul>
  );
};

export default RatingIcon;
