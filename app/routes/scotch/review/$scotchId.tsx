import { FC } from "react";
import { getScotch } from "~/models/scotch.server";
import type { Scotch } from "~/models/scotch.server";
import { json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useCatch, useLoaderData } from "@remix-run/react";

import invariant from "tiny-invariant";

type LoaderData = {
  scotch: Scotch;
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.scotchId, "scotchId not found");

  const scotch = await getScotch({ id: params.scotchId });
  if (!scotch) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ scotch });
};

const ScotchDetailPage: FC = () => {
  const data = useLoaderData() as LoaderData;

  return <h1>{data.scotch.bottleName}</h1>;
};

export default ScotchDetailPage;
