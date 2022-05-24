import { json } from "@remix-run/node";
import Header from "~/components/aspect/user/common/Header";
import { useOptionalUser } from "~/utils";
import { LoaderFunction } from "@remix-run/server-runtime";
import { Link, useLoaderData } from "@remix-run/react";
import { getIndexScotchListItems } from "~/models/scotch.server";

type LoaderData = {
  scotchListItems: Awaited<ReturnType<typeof getIndexScotchListItems>>;
};

export const loader: LoaderFunction = async () => {
  const scotchListItems = await getIndexScotchListItems();
  return json<LoaderData>({ scotchListItems });
};
export default function Index() {
  const data = useLoaderData() as LoaderData;
  const user = useOptionalUser();
  return (
    <>
      <Header />
      <main className="relative bg-white p-4 sm:flex sm:justify-center">
        <Link to="scotch">Scotch Page</Link>
      </main>
    </>
  );
}
