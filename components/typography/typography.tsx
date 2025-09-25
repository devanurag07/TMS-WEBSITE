import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight",
      h2: "scroll-m-20 text-2xl sm:text-2xl md:text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-xl sm:text-xl md:text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-lg sm:text-lg md:text-xl font-semibold tracking-tight",
      subheading:
        "text-xl sm:text-2xl md:text-3xl leading-7 font-semibold inter",
      content:
        "leading-relaxed [&:not(:first-child)]:mt-6 text-base sm:text-lg md:text-xl inter",
      large: "text-base sm:text-lg font-semibold inter",
      small: "text-xs sm:text-sm font-medium leading-none inter",
      muted: "text-xs sm:text-sm text-muted-foreground inter",
    },
  },
  defaultVariants: {
    variant: "content",
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function Typography({
  className,
  variant,
  as: Component = "p",
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Component>
  );
}
