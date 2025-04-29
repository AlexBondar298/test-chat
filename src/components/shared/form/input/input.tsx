import "./input.scss";

import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

export type InputProps = {
  name: string;
  label?: string;
  placeholder: string;
  className?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  type?: string;
  value?: string;
  id?: string;
  resetField(name: string): void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const {
    className = "",
    name,
    label,
    placeholder,
    type = "text",
    value,
    register,
    id,
    errors,
    disabled,
    resetField, // извлекаем, но не прокидываем в input!
    ...attrs
  } = props;
  const error = errors[name];

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={`input-${name}`}>{label}</label>}
      <input
        id={`input-${name}`}
        className="input"
        placeholder={placeholder}
        type={type}
        {...(value !== undefined ? { value } : {})}
        {...register(name)}
        aria-describedby={`inputError-${name}`}
        disabled={disabled}
        {...attrs} // здесь resetField больше не попадёт в DOM!
      />
    </div>
  );
};

export default Input
