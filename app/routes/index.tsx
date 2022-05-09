import { json } from "@remix-run/node";
import Header from "~/components/aspect/user/Header";
import { useOptionalUser } from "~/utils";
import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
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
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        {data.scotchListItems.length === 0 ? null : (
          <div className="mx-auto">
            {data.scotchListItems.map((scotch) => (
              <li key={scotch.id}>📝 {scotch.bottleName}</li>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
