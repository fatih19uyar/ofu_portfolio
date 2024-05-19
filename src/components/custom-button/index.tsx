import {  ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ButtonTypes } from "./type";

import React from "react";

interface CustomButtonProps {
  isLoading?: boolean;
  type: ButtonTypes;
  icon?: React.ReactNode;
  text?: string;
  children?: React.ReactNode;  // Çocuk bileşenler için yeni prop
}

export function CustomButton({
  isLoading,
  type,
  icon,
  text,
  children
}: CustomButtonProps) {
  const renderContent = () => {
    switch (type) {
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
    <Button disabled={isLoading || type === ButtonTypes.Loading} asChild={type === ButtonTypes.AsChild}>
      {renderContent()}
    </Button>
  );
}