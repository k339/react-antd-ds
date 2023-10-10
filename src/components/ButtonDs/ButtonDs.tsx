import React from "react";
import { Button } from "antd";


interface ButtonDsProps {
  children?: React.ReactNode
  type?: 'primary' | 'default' | 'text'
  size?: 'middle' | 'large'
  disabled?: boolean
  onClick?: () => void
}

const ButtonDs = ({ children, type, size, disabled, onClick }: ButtonDsProps) => {
  return (
    <Button className="button-ds" type={type} size={size} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}

export default ButtonDs
