import { FC } from "react";
import { Link, NavLink } from "@remix-run/react";

const AdminSidebar: FC = () => {
  const contentList = ["scotch", "review", "post"];
  return (
    <div className="h-full w-80 border-r bg-gray-50">
      <div className="block p-4 text-xl">Contents</div>

      <hr />

      <ol>
        {contentList.map((content) => (
          <li key={content}>
            <NavLink
              className={({ isActive }) =>
                `block border-b px-8 py-4 text-xl ${isActive ? "bg-white" : ""}`
              }
              to={content}
            >
              {content}
            </NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AdminSidebar;
