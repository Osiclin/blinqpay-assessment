import { HTMLAttributes, ReactNode } from "react"
import "./button.css"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    loading?: boolean
    size?: "40" | "49"
    theme?: "primary" | "secondary" | "transparent"
    children?: string | ReactNode
    [x: string]: any
    className?: string
    disabled?: boolean
}

export const Button = ({
    className,
    children,
    onClick,
    theme,
    disabled = false,
    type,
    loading,
    size,
    ...props
}: ButtonProps) => {
    const btn = {
        size: `cc-button--${size}`,
        themes: {
            primary: `cc-button--primary ${disabled ? "!bg-neutral-300" : ""}`,
            secondary: `cc-button--secondary`,
            transparent: "cc-button--transparent",
        },
    }

    return (
        <button
            className={`cc-button ${theme ? btn.themes[theme] : ""} ${size ? btn.size : ""} ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}
