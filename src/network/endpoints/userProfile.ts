import { API } from "@/constants";
import ServerError from "@/errors/serverError";
import UnauthorizedError from "@/errors/unauthorizedErro";
import ValidationError from "@/errors/validationError";
import { decamelizeKeys } from "humps";

export default {
  async update(userProfile: UserProfile): Promise<void> {
    const res = await fetch(API + "/user_profiles", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(decamelizeKeys({ userProfile })),
      credentials: "include",
    });

    if (res.status === 401) throw new UnauthorizedError();
    if (res.status === 422)
      throw new ValidationError("Invalid UserProfile data");
    if (res.status === 500) throw new ServerError();
  },
};
