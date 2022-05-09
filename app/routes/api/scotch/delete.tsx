import type { ActionFunction } from "@remix-run/node";
import { deleteScotch } from "~/models/scotch.server";
import { redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const scotchId = String(formData.get("scotchId"));
  await deleteScotch({ id: scotchId });

  return redirect(`/admin/scotch`);
};
