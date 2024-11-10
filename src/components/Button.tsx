import React, { HTMLProps } from "react";
type Props = {
  type?: "submit" | "button" | "reset";
  onClick?: (props: any | undefined) => void;
  disabled?: boolean;
  className?: string;
  children?: string | React.ReactNode;
} & HTMLProps<HTMLButtonElement>;
const Button: React.FC<Props> = ({
  className,
  disabled,
  onClick,
  type = "button",
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      {...rest}
      disabled={disabled}
      className={`flex items-center justify-center text-lg px-1 py-1 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;