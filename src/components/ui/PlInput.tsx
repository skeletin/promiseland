import { useId, useState } from "react";
import clsx from "clsx";
import styles from "./PlInput.module.css";

export type PlInputProps = {
  name: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  invalid?: boolean;
  errorMessage?: string;
  variant?: "elevated" | "surface";
};

export function PlInput({
  name,
  label: labelProp,
  value: valueProp,
  defaultValue = "",
  onChange,
  type = "text",
  placeholder = "",
  invalid = false,
  errorMessage = "",
  variant = "surface",
}: PlInputProps) {
  const id = useId();
  const [internal, setInternal] = useState(defaultValue);
  const controlled = valueProp !== undefined;
  const value = controlled ? valueProp : internal;
  const label = labelProp
    ? labelProp
    : name[0].toUpperCase() + name.substring(1, name.length);

  return (
    <div
      className={clsx(
        styles["pl-input"],
        invalid && styles["pl-input--invalid"],
      )}
    >
      <label className={styles["pl-input__label"]} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={clsx(
          styles["pl-input__field"],
          variant === "elevated" && styles["pl-input__field--elevated"],
          invalid && styles["pl-input__field--error"],
        )}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        aria-invalid={invalid}
        onChange={(e) => {
          const v = e.target.value;
          onChange?.(v);
          if (!controlled) setInternal(v);
        }}
      />
      {invalid && errorMessage ? (
        <span className={styles["pl-input__error"]}>{errorMessage}</span>
      ) : null}
    </div>
  );
}
