import React, {
    useState,
    ChangeEvent,
    ReactElement,
    useRef,
    ForwardedRef,
    KeyboardEvent,
    useEffect,
  } from 'react';
  interface Props {
    register?: any;
    className?: string;
    placeholder?: string;
    type: string;
    value?: any;
    disabled?: boolean;
    Prefix?: ReactElement;
    sufix?: ReactElement;
    sufixClass?: string;
    defaultValue?: string;
    PrefixClass?: string;
    inputClassName?: string;
    maxlength?: number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    name?: string;
    // Add a ref prop to the Props interface
    ref?: ForwardedRef<HTMLInputElement>;
    onClick?: () => void;
    isError?: boolean;
    errors?: any;
    errorClass?: any;
    variant?: '' | 'primary';
  }
  // Use React.forwardRef to forward the ref to the input element
  const Input = React.forwardRef(
    (
      {
        register,
        className,
        onChange,
        onKeyDown, // Include onKeyDown in the destructuring
        placeholder,
        type,
        value,
        disabled,
        Prefix,
        sufix,
        sufixClass,
        PrefixClass,
        maxlength,
        inputClassName,
        onInput,
        name,
        onClick,
        errors,
        isError,
        defaultValue,
        errorClass,
        variant = '',
        ...rest
      }: Props,
      ref: ForwardedRef<HTMLInputElement>
    ) => {
      const [toggle, setToggle] = useState(false);
      const handleToggle = () => {
        setToggle(!toggle);
      };
      const inputType = type === 'password' && toggle ? 'text' : type;
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
      };
      // useEffect(() => {
      //   if (isError) {
      //     const timer = setTimeout(() => {
      //       setErrorMessage(error || null);
      //     }, 1000);
      //     return () => clearTimeout(timer);
      //   }
      // }, [isError]);
      const variantStyle = {
        primary:
          'w-full px-3 py-3 border focus:outline-none focus:border-none rounded-md border-[#D4D7E3]',
        '': '',
      };
      return (
        <div
          className={`${variantStyle[variant]} ${className} relative flex items-center w-full border `}
        >
          <div className={` ${PrefixClass}`}>{Prefix}</div>
          <input
            type={inputType}
            className={` flex-grow focus:outline-none focus:border-none border-none outline-none ${inputClassName} `}
            // onChange={onChange }
            onChange={(event) => {
              handleInputChange(event);
              onChange && onChange(event);
            }}
            onKeyDown={onKeyDown} // Pass onKeyDown to the input element
            placeholder={placeholder}
            value={value}
            title={type.charAt(0).toUpperCase() + type.slice(1)}
            disabled={disabled}
            onInput={onInput}
            maxLength={maxlength}
            name={name}
            defaultValue={defaultValue}
            // Pass the ref to the input element
            ref={ref}
            onClick={onClick}
            {...(register ? register(name) : {})}
            {...rest}
          />
          {(isError || (errors && errors[`${name}`])) && (
            <span
              className={`absolute animate-slide-up -bottom-5 left-0 text-red-500 text-sm ${errorClass} `}
            >
              {errors[name ? name : '']?.message || `${name} is required`}
            </span>
          )}
          <div className={`${sufixClass}`}>{sufix}</div>
          {type === 'password' && (
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={handleToggle}
            >
              {toggle ? (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                </svg>
              ) : (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye-invisible"
                  width="1em"
                  height="1em"
                  className="hover:text-black"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" />
                  <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" />
                </svg>
              )}
            </div>
          )}
        </div>
      );
    }
  );
  Input.displayName = 'Input';
  export default Input;