import {  ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ButtonTypes } from "./type";

import React from "react";

interface CustomButtonProps {
  isLoading?: boolean;
  typeStyle: ButtonTypes;
  icon?: React.ReactNode;
  text?: string;
  children?: React.ReactNode; 
}
export function CustomButton({
  isLoading,
  typeStyle,
  icon,
  text,
  children,
  ...props
}: CustomButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CustomButtonProps>) {
  const renderContent = () => {
    switch (typeStyle) {
      case ButtonTypes.Icon:
        return icon;
      case ButtonTypes.Loading:
        return <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />;
      case ButtonTypes.AsChild:
        return children;
      default:
        return text;
    }
  };

  return (
    <Button disabled={isLoading || typeStyle === ButtonTypes.Loading} asChild={typeStyle === ButtonTypes.AsChild} {...props}>
      {renderContent()}
    </Button>
  );
}