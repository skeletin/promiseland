import ValidationError from "@/errors/validationError";
import type {
  NewUser,
  UserCredentials,
} from "../components/features/auth/authSchemas";
import UnauthorizedError from "../errors/unauthorizedErro";
import ServerError from "../errors/serverError";
import { UserSchema } from "@/schemas/userSchema";

const API = import.meta.env.VITE_BACKEND_URL + "/api/v1";

const api = {
  auth: {
    async register(newUser: NewUser): Promise<User> {
      delete newUser.passwordConfirmation;
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

      return await res.json();
    },

    async login(userCredentials: UserCredentials): Promise<User> {
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

      return await res.json();
    },
    async getMe(): Promise<User> {
      const res = await fetch(API + "/me", {
        credentials: "include",
      });

      if (res.status === 401) throw new UnauthorizedError();
      if (res.status === 500) throw new ServerError();

      const data = await res.json();
      return UserSchema.parse(data);
    },
  },
};

export default api;
