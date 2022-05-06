import { FC } from "react";
import { useRecoilValue } from "recoil";
import FilteredScotchListState from "~/state/selecotors/FilteredScotchListState";

const ScotchList: FC = () => {
  const scotchList = useRecoilValue(FilteredScotchListState);
  const headers = [
    "Bottle Name",
    "Price",
    "Age",
    "Limited",
    "stars",
    "Create At",
    "Update At",
    "Edit",
    "Delete",
  ];
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 overflow-x-auto py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {scotchList.map((scotchData) => {
                return (
                  <tr key={scotchData.id}>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5">
                        {scotchData.bottleName}
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5">
                        {scotchData.price}
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5">{scotchData.age}</div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5">
                        {scotchData.limited}
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5">
                        {scotchData.stars}
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5">
                        {scotchData.createdAt}
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5">
                        {scotchData.updatedAt}
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </td>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScotchList;
