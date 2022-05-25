import { Link } from "@remix-run/react";
import { FC } from "react";
const AdminIndexPage: FC = () => {
  return (
    <p>
      No note selected. Select a note on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new note.
      </Link>
    </p>
  );
};

export default AdminIndexPage;
