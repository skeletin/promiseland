import { createContext } from "react";

type AuthContextData = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextData | null>(null);
