import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  EyeIcon,
  EyeOffIcon,
  MailIcon,
  SearchIcon,
  KeyRound,
} from "lucide-react";
import { CustomInputProps, InputTypes } from "./type";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  type,
  placeholder,
  customIcon,
  className,
  form,
  ...props
}) => {
  const isPasswordType = type === InputTypes.Password;
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const renderLeftIcon = () => {
    switch (type) {
      case InputTypes.Email:
        return (
          <MailIcon className="absolute left-3 h-5 w-5 text-gray-500 mt-2" />
        );
      case InputTypes.Search:
        return (
          <SearchIcon className="absolute left-3 h-5 w-5 text-gray-500 mt-2" />
        );
      case InputTypes.Password:
        return (
          <KeyRound className="absolute left-3 h-5 w-5 text-gray-500 mt-2" />
        );
      case InputTypes.Custom:
        return customIcon
          ? React.cloneElement(customIcon as React.ReactElement, {
              className: "absolute left-3 h-5 w-5 text-gray-500 mt-2",
            })
          : null;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {renderLeftIcon()}
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type={isPasswordType && !showPassword ? "password" : "text"}
                placeholder={placeholder}
                {...field}
                className={`pl-10 ${className} ${
                  isPasswordType ? "pr-10" : ""
                } `}
                {...props}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {isPasswordType && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-500" />
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
