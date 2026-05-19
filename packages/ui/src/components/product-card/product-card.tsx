import { cn } from "../../utils/cn"

interface ProductCardProps {
  id: string
  title: string
  price: number
  description?: string
  image: string
  className?: string
  onAdd?: () => void
}

export function ProductCard({
  title,
  price,
  description,
  image,
  className,
  onAdd,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-3",
        className
      )}
    >
      {/* Image Container */}
      <div className="w-full h-48 overflow-hidden rounded-2xl bg-gray-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="px-1 flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-bold text-xl text-gray-900 leading-tight">
            {title}
          </h3>
          <span className="text-lg font-medium text-gray-400">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Buy Button */}
        <button
          onClick={onAdd}
          className="
            w-full py-2.5 rounded-full bg-[#00A86B] text-white 
            text-sm font-semibold transition-all
            hover:bg-[#00905a] active:scale-[0.98]
          "
        >
          Buy
        </button>
      </div>
    </div>
  )
}
