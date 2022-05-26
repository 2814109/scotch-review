import React, { useEffect, useState } from "react";
import DarkStar from "./Icon/DarkStar";
import BrightStar from "./Icon/BrightStar";

type Props = {
  formDataStar: number;
  setFormDataStar: (star: number) => void;
};
const StarRating: React.FC<Props> = ({ formDataStar, setFormDataStar }) => {
  const [stars, setStars] = useState<boolean[]>([]);

  useEffect(() => {
    handleStarShine(formDataStar);
  }, []);

  const handleStarShine = (rating: number) => {
    const MAX_STARS = 5;
    let setStarValue: boolean[] = [];
    [...Array(rating)].map((_) => {
      setStarValue.push(true);
    });

    [...Array(MAX_STARS - rating)].map((_) => {
      setStarValue.push(false);
    });
    setStars(setStarValue);
  };

  useEffect(() => {
    const starCount = stars.filter((element) => {
      return element === true;
    }).length;
    setFormDataStar(starCount);
  }, [stars]);

  return (
    <>
      <div className="flex">
        {stars.map((star: boolean, index: number) => {
          return (
            <span key={index} onClick={() => handleStarShine(index + 1)}>
              {star ? <BrightStar /> : <DarkStar />}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
