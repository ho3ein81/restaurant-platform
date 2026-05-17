// ✅ یک‌جا تعریف رنگ‌های اصلی (theme-aware design tokens)

export const themeTokens = {
  colors: {
    primary: {
      DEFAULT: "bg-green-600 text-white hover:bg-green-700",
      outline: "border border-green-600 text-green-600 hover:bg-green-50",
    },
    secondary: {
      DEFAULT: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    },
    destructive: {
      DEFAULT: "bg-red-600 text-white hover:bg-red-700",
      outline: "border border-red-600 text-red-600 hover:bg-red-50",
    },
  },
  radius: {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  },
}
