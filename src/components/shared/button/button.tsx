import { ReactNode, ButtonHTMLAttributes } from "react";
import "./button.scss";

export type ButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ type = "button", disabled, children, ...attrs }: ButtonProps) => {
  return (
    <button className="btn" type={type} disabled={disabled} {...attrs}>
      {children}
    </button>
  );
};

export default Button;
