import React from "react";
import { Button } from "antd";

export interface ButtonProps {
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
const ButtonDs = ({
  type = "primary",
  size = "medium",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <Button onClick={onClick}>{children}</Button>
  );
};

export default ButtonDs;
