import React from "react";
import { Input } from "../ui/input";
import { atom, useAtom } from "jotai";
import {
  EyeIcon,
  EyeOffIcon,
  MailIcon,
  SearchIcon,
  KeyRound,
} from "lucide-react";
import { CustomInputProps, InputTypes } from "./type";

const showPasswordAtom = atom(false);

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  type,
  placeholder,
  customIcon,
}) => {
  const [showPassword, setShowPassword] = useAtom(showPasswordAtom);
  const isPasswordType = type === InputTypes.Password;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

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
      <Input
        type={isPasswordType && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`pl-10 ${isPasswordType ? "pr-10" : ""}`}
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
