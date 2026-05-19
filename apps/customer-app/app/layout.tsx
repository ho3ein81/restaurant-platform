import type { Metadata } from "next"
import "./globals.css"
import { Vazirmatn } from "next/font/google"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "اپ مشتری کافه",
  description: "Restaurant platform - Customer PWA",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#00A86B",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`
          ${vazirmatn.className}
          bg-[#F9FAFB] 
          text-[#111827] 
          antialiased 
          min-h-screen
        `}
      >
        {/* Mobile App Container */}
        <div className="mx-auto max-w-md min-h-screen bg-white shadow-xl relative">
          {children}
        </div>
      </body>
    </html>
  )
}
