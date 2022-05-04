import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { createScotch } from "~/models/scotch.server";
import { ScotchFormActionData } from "~/types/form/scotch";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const bottleName = String(formData.get("bottleName"));
  const price = Number(formData.get("price"));
  const age = Number(formData.get("age"));
  const limited = String(formData.get("limited"));

  // if (typeof bottleName !== "string" || bottleName.length === 0) {
  //   return json<ScotchFormActionData>(
  //     { errors: { bottleName: "Bottle Name is required" } },
  //     { status: 400 }
  //   );
  // }

  // if (typeof limited !== "string" || limited.length === 0) {
  //   return json<ScotchFormActionData>(
  //     { errors: { limited: "limited is required" } },
  //     { status: 400 }
  //   );
  // }

  // if (typeof price !== "number") {
  //   return json<ScotchFormActionData>(
  //     { errors: { price: "price is required" } },
  //     { status: 400 }
  //   );
  // }

  // if (typeof age !== "number") {
  //   return json<ScotchFormActionData>(
  //     { errors: { age: "age is required" } },
  //     { status: 400 }
  //   );
  // }

  await createScotch({
    bottleName,
    price,
    age,
    limited,
    userId,
  });

  return redirect(`/admin/scotch`);
};
