import type { MouseEventHandler, ReactElement } from 'react';
import styles from './Button.module.css';

function Button({
  children,
  onClick,
  type,
}: {
  children: ReactElement | string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: string;
}) {
  return (
    <button
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
