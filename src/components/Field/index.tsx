import { ReactNode } from "react";
import { clsx } from "clsx";

import styles from "./fieldBase.module.css";

interface Props {
  checked: boolean;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  isZero?: boolean;
}

export function Field({
  className,
  checked,
  disabled = false,
  isZero = false,
  icon = null,
}: Props) {
  return (
    <label
      className={clsx(
        styles.fieldBase,
        isZero && styles.fieldBase_zero,
        className,
      )}
    >
      <input
        type="checkbox"
        name="field"
        checked={checked}
        className={styles.fieldBase__input}
        disabled={disabled}
      />
      {checked && icon}
    </label>
  );
}
