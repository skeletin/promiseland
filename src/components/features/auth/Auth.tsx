import { Code } from "lucide-react";
import { GithubMarkIcon } from "../../icons/GithubMarkIcon";
import styles from "./Auth.module.css";
import { type ReactNode } from "react";
import { PlTabBar } from "../../common/PlTabBar";
import { PlInput } from "../../ui/PlInput";
import { PlButton } from "../../ui/PlButton";
import AuthFormContext from "./AuthFormContext";
import useAuthForm from "./useAuthForm";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {
  loginSchema,
  registerSchema,
  type NewUser,
  type UserCredentials,
} from "./authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/network/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type AuthFormProps = {
  children: ReactNode;
};

export default function Auth() {
  return (
    <main className={styles["auth-feature"]}>
      <AuthForm>
        <AuthForm.Header />
        <AuthForm.TabBar />
        <AuthForm.Fields />
        <AuthForm.Controls />
      </AuthForm>
    </main>
  );
}

function AuthForm({ children }: AuthFormProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get("mode");
  const index = mode ? (mode === "login" ? 0 : mode === "register" ? 1 : 0) : 0;
  const {
    auth: { register, login },
  } = api;
  const queryClient = useQueryClient();

  const defaultValues = (): NewUser | UserCredentials => {
    if (mode === "register") {
      return {
        email: "",
        username: "",
        password: "",
        passwordConfirmation: "",
      } satisfies NewUser;
    }
    return { email: "", password: "" } satisfies UserCredentials;
  };

  const { handleSubmit, control, reset } = useForm<UserCredentials | NewUser>({
    defaultValues: defaultValues(),
    resolver: zodResolver(mode === "register" ? registerSchema : loginSchema),
  });

  const { mutate: mutateRegister } = useMutation({
    mutationFn: register,
    onSuccess: () => navigate("/onboarding", { replace: true }),
  });

  const { mutate: mutateLogin } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth-user"] });
      navigate("/learn", { replace: true });
    },
  });

  const handleSelectTab = (index: number) => {
    if (index === 0) setSearchParams({ mode: "login" });
    if (index === 1) setSearchParams({ mode: "register" });
    reset();
  };

  const onSubmit: SubmitHandler<NewUser | UserCredentials> = (data) => {
    if (mode === "register") mutateRegister(data as NewUser);
    if (mode === "login") mutateLogin(data as UserCredentials);
  };

  return (
    <AuthFormContext.Provider
      value={{ activeIndex: index, handleSelectTab, control }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={styles["auth-form"]}>
        {children}
      </form>
    </AuthFormContext.Provider>
  );
}

function Header() {
  return (
    <div className={styles["auth-form__header"]}>
      <Code className={styles["auth-form__header-icon"]} aria-hidden />
      <h1 className={styles["auth-form__header-logo"]}>PromiseLand</h1>
      <p className={styles["auth-form__header-cta"]}>
        Master JavaScript Promises
      </p>
    </div>
  );
}

function TabBar() {
  const { activeIndex, handleSelectTab } = useAuthForm();
  return (
    <PlTabBar
      tabs={["Log in", "Register"]}
      activeIndex={activeIndex}
      onSelectTab={handleSelectTab}
    />
  );
}

function Fields() {
  const { activeIndex } = useAuthForm();

  return (
    <div className={styles["auth-form__fields"]}>
      {activeIndex == 0 && <LoginFields />}
      {activeIndex == 1 && <RegisterFields />}
    </div>
  );
}

function LoginFields() {
  const { control } = useAuthForm();
  return (
    <>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <PlInput
            type="email"
            variant="elevated"
            placeholder="you@example.com"
            required
            invalid={fieldState.invalid}
            errorMessage={fieldState.error && fieldState.error.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <PlInput
            type="password"
            variant="elevated"
            placeholder="••••••••"
            required
            invalid={fieldState.invalid}
            errorMessage={fieldState.error && fieldState.error.message}
            {...field}
          />
        )}
      />
      <span className={styles["auth-form__password-reset-link"]}>
        Forgot Password?
      </span>
    </>
  );
}

function RegisterFields() {
  const { control } = useAuthForm();
  return (
    <>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <PlInput
            type="email"
            variant="elevated"
            placeholder="you@example.com"
            required
            invalid={fieldState.invalid}
            errorMessage={fieldState.error && fieldState.error.message}
            {...field}
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({ field, fieldState }) => (
          <PlInput
            type="text"
            variant="elevated"
            placeholder="username"
            required
            invalid={fieldState.invalid}
            errorMessage={fieldState.error && fieldState.error.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <PlInput
            type="password"
            variant="elevated"
            placeholder="••••••••"
            required
            invalid={fieldState.invalid}
            errorMessage={fieldState.error && fieldState.error.message}
            {...field}
          />
        )}
      />
      <Controller
        name="passwordConfirmation"
        control={control}
        render={({ field, fieldState }) => (
          <PlInput
            label="Password Confirmation"
            type="password"
            variant="elevated"
            placeholder="••••••••"
            required
            invalid={fieldState.invalid}
            errorMessage={fieldState.error && fieldState.error.message}
            {...field}
          />
        )}
      />
    </>
  );
}

function Controls() {
  const { activeIndex } = useAuthForm();
  return (
    <div className={styles["auth-form__controls"]}>
      <PlButton variant="primary" size="md" type="submit">
        {activeIndex === 0 ? "Log in" : "Create Account"}
      </PlButton>
      <div className={styles["auth-form__divider"]} role="separator">
        <span className={styles["auth-form__divider-line"]} aria-hidden />
        <span className={styles["auth-form__divider-text"]}>or</span>
        <span className={styles["auth-form__divider-line"]} aria-hidden />
      </div>
      <PlButton variant="secondary" size="md">
        <span className={styles["auth-form__oauth-inner"]}>
          <GithubMarkIcon size={18} />
          Continue with GitHub
        </span>
      </PlButton>
    </div>
  );
}

AuthForm.Header = Header;
AuthForm.TabBar = TabBar;
AuthForm.Fields = Fields;
AuthForm.Controls = Controls;
