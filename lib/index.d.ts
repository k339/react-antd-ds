import React from 'react';

interface ButtonProps {
    type?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
/**
 * Primary UI component for user interaction
 */
declare const ButtonDs: ({ type, size, children, onClick, }: ButtonProps) => React.JSX.Element;

export { ButtonDs };
