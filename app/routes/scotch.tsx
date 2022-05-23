import Header from "~/components/aspect/user/Header";

import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <Header />
      <main className="relative bg-white p-4 sm:flex sm:justify-center">
        <Outlet />
      </main>
    </>
  );
}
