import Header from "~/components/aspect/user/Header";

import { Outlet } from "@remix-run/react";

const ScotchIndex = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ScotchIndex;
