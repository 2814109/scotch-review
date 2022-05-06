import { FC, useEffect } from "react";
import ScotchForm from "~/components/aspect/admin/routes/scotch/ScotchForm";
import SearchContent from "~/components/aspect/admin/routes/scotch/SearchContent";
import { useRecoilValue } from "recoil";
import ScotchFormIsOpen from "~/state/atoms/ScotchFormIsOpen";
import { getIndexScotchListItems } from "~/models/scotch.server";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import ScotchTable from "~/components/aspect/admin/routes/scotch/ScotchTable";
import { useSetRecoilState } from "recoil";
import ScotchListState from "~/state/atoms/ScotchListState";

type LoaderData = {
  scotchListItems: Awaited<ReturnType<typeof getIndexScotchListItems>>;
};

export const loader: LoaderFunction = async () => {
  const scotchListItems = await getIndexScotchListItems();
  return json<LoaderData>({ scotchListItems });
};

const ScotchIndex: FC = () => {
  const isOpen = useRecoilValue(ScotchFormIsOpen);
  const scotchList = useLoaderData() as LoaderData;
  const setScotchList = useSetRecoilState(ScotchListState);
  useEffect(() => {
    setScotchList(scotchList.scotchListItems);
  }, []);

  return (
    <>
      <SearchContent />
      {isOpen && <ScotchForm />}
      <ScotchTable />
    </>
  );
};

export default ScotchIndex;
