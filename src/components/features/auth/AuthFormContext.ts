import { createContext } from "react";
import type { Control, FieldErrors } from "react-hook-form";
import type { NewUser, UserCredentials } from "./authSchemas";

type AuthFormContextData = {
  activeIndex: number;
  handleSelectTab: (i: number) => void;
  control: Control<UserCredentials | NewUser, any, UserCredentials | NewUser>;
  errors?: FieldErrors<UserCredentials | NewUser>;
};

const AuthFormContext = createContext<AuthFormContextData | null>(null);

export default AuthFormContext;
