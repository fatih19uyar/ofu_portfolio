export enum InputTypes {
  Email = "email",
  Password = "password",
  Search = "search",
  Custom = "custom",
}

export interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  type: InputTypes;
  placeholder?: string;
  customIcon?: React.ReactNode; 
}
