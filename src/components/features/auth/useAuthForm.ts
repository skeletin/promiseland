import { useContext } from "react";
import AuthFormContext from "./AuthFormContext";

const useAuthForm = () => {
  const ctx = useContext(AuthFormContext);
  if (!ctx) throw new Error("Must be used inside <AuthForm>");
  return ctx;
};

export default useAuthForm;
