import { Control, ControllerRenderProps, FieldErrors } from "react-hook-form";

export enum InputTypes {
  Email = "email",
  Password = "password",
  Search = "search",
  Custom = "custom",
}

export interface CustomInputProps {
  name: string;
  type: InputTypes;
  placeholder?: string;
  customIcon?: React.ReactNode;
  className?: string;
  form: any
}
