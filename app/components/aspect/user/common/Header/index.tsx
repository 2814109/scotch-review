import { FC } from "react";
import { Link } from "@remix-run/react";
import { MdOutlineHowToVote } from "react-icons/md";
import { useOptionalUser } from "~/utils";
import { Form } from "@remix-run/react";

const Header: FC = () => {
  const user = useOptionalUser();

  return (
    <>
      <nav className="relative mb-3 flex flex-wrap items-center justify-between bg-amber-700 px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link
              className="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white"
              to="/scotch"
            >
              Scotch Review
            </Link>
          </div>
          <div
            className={"flex-grow items-center lg:flex"}
            id="example-navbar-danger"
          >
            <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
              {/* <li className="nav-item">
                <Link
                  to="scotch/review"
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                >
                  <MdOutlineHowToVote />
                  <span className="ml-2">レビュー</span>
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  to="scotch/"
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                >
                  <MdOutlineHowToVote />
                  <span className="ml-2">生産地</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="scotch/"
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                >
                  <MdOutlineHowToVote />
                  <span className="ml-2">コンセプト</span>
                </Link>
              </li> */}
              {user ? (
                <li className="nav-item">
                  <Form action="/logout" method="post">
                    <button
                      type="submit"
                      className="rounded bg-slate-600 px-3 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
                    >
                      Logout
                    </button>
                  </Form>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md bg-white px-2 py-1 text-base font-medium text-blue-900 shadow-sm hover:bg-blue-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-blue-800 px-2 py-1 font-medium text-white hover:bg-blue-900 sm:px-8"
                    >
                      Log In
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
