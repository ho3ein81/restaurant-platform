import { ReactNode } from "react";
import { themeTokens, ButtonVariant } from "../../styles/tokens";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isOutline?: boolean;
  radius?: keyof typeof themeTokens.radius;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  isOutline = false,
  radius = "full", // مطابق فیگما که کپسولی بود
  className,
  children,
  ...props
}: ButtonProps) {
  
  // استخراج کلاس‌های رنگی بر اساس Variant و Outline
  const variantStyles = isOutline 
    ? themeTokens.colors[variant].outline 
    : themeTokens.colors[variant].DEFAULT;

  // استخراج کلاس Border Radius
  const radiusStyle = themeTokens.radius[radius];

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-6 py-2.5 font-medium transition-all active:scale-95 disabled:opacity-50",
        variantStyles,
        radiusStyle,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
