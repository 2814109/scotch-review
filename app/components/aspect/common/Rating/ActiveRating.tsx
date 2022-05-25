import React, { useState } from "react";
import DarkStar from "./Icon/DarkStar";
import BrightStar from "./Icon/BrightStar";
const StarRating: React.FC = () => {
  const [stars, setStars] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const HandleStarShine = (rating: number) => {
    const MAX_STARS = 5;
    let setStarValue: boolean[] = [];
    [...Array(rating)].map((_) => {
      setStarValue.push(true);
    });

    [...Array(MAX_STARS - rating)].map((_) => {
      setStarValue.push(false);
    });
    console.log(setStarValue);
    setStars(setStarValue);
  };

  return (
    <>
      <div className="flex">
        {stars.map((star: boolean, index: number) => {
          return (
            <span key={index} onClick={() => HandleStarShine(index + 1)}>
              {star ? <BrightStar /> : <DarkStar />}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
