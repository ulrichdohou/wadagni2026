import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-colors overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-transparent",
        secondary:
          "bg-secondary text-secondary-foreground border-transparent",
        destructive:
          "bg-destructive text-white border-transparent",
        outline:
          "border-border text-foreground",
        done: "bg-benin-green-muted text-benin-green border-benin-green/20 font-semibold",
        progress:
          "bg-benin-yellow-muted text-benin-yellow-dark border-benin-yellow/20 font-semibold",
        future: "bg-blue-50 text-blue-700 border-blue-200 font-semibold",
        rumor: "bg-benin-red-muted text-benin-red border-benin-red/20 font-semibold",
        fact: "bg-benin-green-muted text-benin-green border-benin-green/20 font-semibold",
        source:
          "bg-benin-green-muted text-benin-green text-xs font-semibold px-2 py-0.5 border-benin-green/20",
        department:
          "bg-surface-alt text-ink-secondary font-medium border-transparent",
        now: "bg-benin-yellow-muted text-benin-yellow-dark border-benin-yellow/20 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
