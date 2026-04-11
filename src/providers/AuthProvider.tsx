import { AuthContext } from "@/contexts/AuthContext";
import api from "@/network/api";
import { useQuery } from "@tanstack/react-query";
import type { ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["auth-user"],
    queryFn: api.auth.getMe,
    retry: false,
  });

  const value = {
    user: data ?? null,
    isAuthenticated: !!data,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
