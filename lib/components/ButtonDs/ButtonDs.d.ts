import React from "react";
interface ButtonDsProps {
    children?: React.ReactNode;
    type?: 'primary' | 'default' | 'text';
    size?: 'middle' | 'large';
    disabled?: boolean;
    onClick?: () => void;
}
declare const ButtonDs: ({ children, type, size, disabled, onClick }: ButtonDsProps) => React.JSX.Element;
export default ButtonDs;
