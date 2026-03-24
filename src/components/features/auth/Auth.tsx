import { Code } from "lucide-react";
import { GithubMarkIcon } from "../../icons/GithubMarkIcon";
import styles from "./Auth.module.css";
import { useState, type ReactNode } from "react";
import { PlTabBar } from "../../common/PlTabBar";
import { PlInput } from "../../ui/PlInput";
import { PlButton } from "../../ui/PlButton";
import AuthFormContext from "./AuthFormContext";
import useAuthForm from "./useAuthForm";

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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AuthFormContext.Provider value={{ activeIndex, setActiveIndex }}>
      <form className={styles["auth-form"]}>{children}</form>
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
  const { activeIndex, setActiveIndex } = useAuthForm();
  return (
    <PlTabBar
      tabs={["Log in", "Register"]}
      activeIndex={activeIndex}
      onSelectTab={setActiveIndex}
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
  return (
    <>
      <PlInput
        name="email"
        type="email"
        variant="elevated"
        placeholder="you@example.com"
      />
      <PlInput
        name="password"
        type="password"
        variant="elevated"
        placeholder="••••••••"
      />
      <span className={styles["auth-form__password-reset-link"]}>
        Forgot Password?
      </span>
    </>
  );
}

function RegisterFields() {
  return (
    <>
      <PlInput
        name="email"
        type="email"
        variant="elevated"
        placeholder="you@example.com"
      />
      <PlInput
        name="username"
        type="text"
        variant="elevated"
        placeholder="username"
      />
      <PlInput
        name="password"
        type="password"
        variant="elevated"
        placeholder="••••••••"
      />
      <PlInput
        label="Password Confirmation"
        name="passwordConfirmation"
        type="password"
        variant="elevated"
        placeholder="••••••••"
      />
    </>
  );
}

function Controls() {
  console.log("Controls Renders");
  return (
    <div className={styles["auth-form__controls"]}>
      <PlButton variant="primary" size="md" type="submit">
        Log in
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
