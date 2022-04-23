import { FC } from "react";
const ScotchIndex: FC = () => {
  const scotchList = [...Array(10)].map((_, index) => {
    return { id: index };
  });
  return (
    <>
      {scotchList.map((_) => {
        return <h1>title</h1>;
      })}
    </>
  );
};

export default ScotchIndex;
