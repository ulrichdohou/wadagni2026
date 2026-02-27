import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-benin-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-benin-green text-white hover:bg-benin-green-dark hover:shadow-md shadow-sm",
        secondary:
          "bg-surface-alt text-ink hover:bg-surface-dim",
        outline:
          "border-2 border-benin-green text-benin-green hover:bg-benin-green-muted bg-transparent",
        ghost:
          "text-ink-secondary hover:text-ink hover:bg-surface-alt",
        whatsapp:
          "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-sm hover:shadow-md",
        yellow:
          "bg-benin-yellow text-white hover:bg-benin-yellow-dark font-bold shadow-sm",
        destructive:
          "bg-benin-red text-white hover:bg-benin-red/90",
        link: "text-benin-green underline-offset-4 hover:underline p-0 h-auto",
        "outline-inverse":
          "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
      },
      size: {
        xs: "h-7 px-3 text-xs rounded-full",
        sm: "h-9 px-4 text-xs rounded-full",
        default: "h-11 px-6 text-sm rounded-full",
        lg: "h-14 px-8 text-base rounded-full",
        full: "h-12 w-full text-base rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
