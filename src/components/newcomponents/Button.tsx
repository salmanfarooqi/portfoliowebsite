import React, { HTMLProps } from 'react';

type Props = {
  variant?: 'primary' | 'disabled' | 'Secondary'; // Define the available variants here
  type?: 'submit' | 'button' | 'reset';
  onClick?: (props: any | undefined) => void;
  disabled?: boolean;
  className?: string;
  children?: string | React.ReactNode;
} & HTMLProps<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  className,
  disabled,
  onClick,
  variant,
  type = 'button',
  children,
  ...rest
}) => {
  const getVariantStyle = () => {
    if (variant === 'disabled')
      return 'bg-gray-500 outline-none h-10 rounded-lg';
    if (variant === 'Secondary')
      return 'h-10  border !border-blue-700 text-blue-700 bg-white';
    if (variant === 'primary') 'rounded-lg bg-blue-700 text-white';
  };

  return (
    <button
      type={type}
      {...rest}
      disabled={disabled}
      className={`${getVariantStyle()} flex items-center justify-center text-lg px-1 py-1 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
