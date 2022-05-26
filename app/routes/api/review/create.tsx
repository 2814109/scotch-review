import type { ActionFunction } from "@remix-run/node";
import {
  //json,
  redirect,
} from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { createReview } from "~/models/review.server";
// import { ScotchFormActionData } from "~/types/form/scotch";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const star = Number(formData.get("star"));
  const comment = String(formData.get("comment"));
  const scotchId = String(formData.get("scotchId"));

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

  await createReview({
    star,
    comment,
    scotchId,
    userId,
  });

  return redirect(`/scotch/review/${scotchId}`);
};
