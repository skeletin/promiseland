import { createContext } from "react";

type AuthFormContextData = {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
};

const AuthFormContext = createContext<AuthFormContextData | null>(null);

export default AuthFormContext;
