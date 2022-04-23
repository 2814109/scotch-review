import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import Header from "~/components/aspect/admin/common/Header/index";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";
import Sidebar from "~/components/aspect/admin/common/Sidebar";
type LoaderData = {
  noteListItems: Awaited<ReturnType<typeof getNoteListItems>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json<LoaderData>({ noteListItems });
};

export default function NotesPage() {
  const data = useLoaderData() as LoaderData;
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header user={user} />

      <main className="flex h-full bg-white">
        <Sidebar data={data} />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
