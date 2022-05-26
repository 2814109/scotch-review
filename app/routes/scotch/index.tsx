import { json } from "@remix-run/node";
import { useOptionalUser } from "~/utils";
import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
import { getIndexScotchListItems } from "~/models/scotch.server";
import SctochCard from "~/components/aspect/user/routes/scotch/ScotchCard";
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
      {data.scotchListItems.length === 0 ? null : (
        <div className="grid  gap-4 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.scotchListItems.map((scotch) => (
            <SctochCard key={scotch.id} scotch={scotch} />
          ))}
        </div>
      )}
    </>
  );
}
