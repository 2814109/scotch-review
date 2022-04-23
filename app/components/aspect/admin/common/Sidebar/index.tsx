import { FC } from "react";
import { Link, NavLink } from "@remix-run/react";
import { getNoteListItems } from "~/models/note.server";

type LoaderData = {
  noteListItems: Awaited<ReturnType<typeof getNoteListItems>>;
};
type Props = {
  data: LoaderData;
};
const Sidebar: FC<Props> = ({ data }) => {
  return (
    <div className="h-full w-80 border-r bg-gray-50">
      <Link to="new" className="block p-4 text-xl text-blue-500">
        + New Note
      </Link>

      <hr />

      {data.noteListItems.length === 0 ? (
        <p className="p-4">No notes yet</p>
      ) : (
        <ol>
          {data.noteListItems.map((note) => (
            <li key={note.id}>
              <NavLink
                className={({ isActive }) =>
                  `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                }
                to={note.id}
              >
                📝 {note.title}
              </NavLink>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Sidebar;
