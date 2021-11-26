import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './styles.module.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
  }

function Button({children}: ButtonProps) {
    return(
        <button className={styles.button} type="submit">
            {children}
        </button>
    )
}

export default Button;