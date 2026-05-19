import { cn } from "../../utils/cn"

export interface CategoryItem {
  id: string
  label: string
}

interface CategoryPillsProps {
  items: CategoryItem[]
  value: string
  onChange: (id: string) => void
  className?: string
}

export function CategoryPills({
  items,
  value,
  onChange,
  className,
}: CategoryPillsProps) {
  return (
    <div
      className={cn(
        "flex gap-3 overflow-x-auto scrollbar-hide py-2",
        className
      )}
    >
      {items.map((item) => {
        const isActive = item.id === value

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition",
              isActive
                ? "bg-[#00A86B] text-white shadow-sm"
                : "bg-white text-gray-700 border border-gray-200"
            )}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
