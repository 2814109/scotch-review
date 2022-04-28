import { json } from "@remix-run/node";
import Header from "~/components/aspect/user/Header";
import { useOptionalUser } from "~/utils";
import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";

import { getIndexNoteListItems } from "~/models/note.server";

type LoaderData = {
  noteListItems: Awaited<ReturnType<typeof getIndexNoteListItems>>;
};

export const loader: LoaderFunction = async () => {
  const noteListItems = await getIndexNoteListItems();
  return json<LoaderData>({ noteListItems });
};
export default function Index() {
  const data = useLoaderData() as LoaderData;
  const user = useOptionalUser();
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        {data.noteListItems.length === 0 ? null : (
          <div className="mx-auto">
            {data.noteListItems.map((note) => (
              <li key={note.id}>📝 {note.title}</li>
            ))}
          </div>
        )}
        {/* <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
          {user ? (
            <Link
              to="/notes"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
            >
              View Notes for {user.email}
            </Link>
          ) : (
            null
          )}
        </div> */}
      </main>
    </>
  );
}
