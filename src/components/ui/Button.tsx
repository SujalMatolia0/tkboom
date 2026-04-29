import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "as"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      as = "button",
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg shadow-orange-500/30 font-bold",
      secondary:
        "bg-slate-200 text-slate-900 hover:bg-slate-300 font-bold",
      outline:
        "border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-bold",
      ghost: "hover:bg-slate-200/50 text-slate-700 hover:text-slate-900 font-bold",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-2.5",
      lg: "px-8 py-3 text-lg font-bold",
    };

    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50",
      variants[variant as keyof typeof variants],
      sizes[size as keyof typeof sizes],
      className
    );

    if (as === "a" && href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={baseClasses}
          href={href}
          target={target}
          rel={rel}
          {...props}
        />
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
