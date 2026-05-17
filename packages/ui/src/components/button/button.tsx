import * as React from "react"
import { cn } from "../../utils/cn"
import { themeTokens } from "../../styles/tokens"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: "primary" | "secondary" | "destructive"
  styleType?: "solid" | "outline"
  size?: "sm" | "md" | "lg"   // ⚡ اضافه شد
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      styleType = "solid",
      size = "md", // پیش‌فرض
      ...props
    },
    ref
  ) => {
    const colorClasses =
      styleType === "outline"
        ? themeTokens.colors[variant].outline
        : themeTokens.colors[variant].DEFAULT

    const sizeClasses = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all",
          themeTokens.radius.md,
          sizeClasses[size],
          colorClasses,
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
