import type {
  NewUser,
  UserCredentials,
} from "@/components/features/auth/authSchemas";
import { API } from "@/constants";
import InvalidDataError from "@/errors/invalidDataError";
import ServerError from "@/errors/serverError";
import UnauthorizedError from "@/errors/unauthorizedError";
import ValidationError from "@/errors/validationError";
import { UserSchema } from "@/schemas/userSchema";

export default {
  async register(data: NewUser) {
    const { passwordConfirmation, ...newUser } = data;
    const res = await fetch(API + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: newUser }),
      credentials: "include",
    });

    if (res.status === 422) throw new ValidationError("Invalid User Data");
    if (res.status === 500) throw new ServerError();
  },

  async login(userCredentials: UserCredentials) {
    const res = await fetch(API + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userCredentials }),
      credentials: "include",
    });

    if (res.status === 401)
      throw new UnauthorizedError("Invalid username/password");
    if (res.status === 500) throw new ServerError();
  },

  async getMe(): Promise<User> {
    const res = await fetch(API + "/me", {
      credentials: "include",
    });

    if (res.status === 401) throw new UnauthorizedError();
    if (res.status === 500) throw new ServerError();

    const data = await res.json();
    const { success, data: userData } = UserSchema.safeParse(data);
    if (!success) throw new InvalidDataError();
    return userData;
  },
};
