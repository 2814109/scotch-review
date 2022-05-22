import { json } from "@remix-run/node";
import Header from "~/components/aspect/user/Header";
import { useOptionalUser } from "~/utils";
import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
import { getIndexScotchListItems } from "~/models/scotch.server";
import RatingIcon from "~/components/aspect/common/RatingIcon";
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
        {data.scotchListItems.length === 0 ? null : (
          <div
            className="grid grid-cols-3 gap-4 px-4"
            //className="mx-auto"
          >
            {data.scotchListItems.map((scotch) => (
              <div
                key={scotch.id}
                className="h-64 overflow-hidden rounded shadow-lg"
              >
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
            ))}
          </div>
        )}
      </main>
    </>
  );
}
